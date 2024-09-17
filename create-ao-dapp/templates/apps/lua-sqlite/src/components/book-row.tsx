import { useState } from "react";
import DeleteBook from "./delete-book";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createDataItemSigner, message, result } from "@permaweb/aoconnect";
import { BOOKS } from "../constants/books_process";

type Book = {
  Id: number;
  Title: string;
  Author: string;
};

export default function BookRow({ book }: { book: Book }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(book.Title);
  const [editedAuthor, setEditedAuthor] = useState(book.Author);

  const queryClient = useQueryClient();

  const editBook = useMutation({
    mutationKey: ["Update-Book", book.Id],
    mutationFn: async () => {
      const messageId = await message({
        process: BOOKS,
        tags: [
          {
            name: "Action",
            value: "Update-Book",
          },
        ],
        data: JSON.stringify({
          Id: book.Id,
          Title: editedTitle,
          Author: editedAuthor,
        }),
        signer: createDataItemSigner(window.arweaveWallet),
      });

      const messageResult = await result({
        process: BOOKS,
        message: messageId,
      });

      if (messageResult.Messages[0].Data) {
        return JSON.parse(messageResult.Messages[0].Data);
      }

      return undefined;
    },
    onSuccess: () => {
      setIsEditing(false);
      queryClient.invalidateQueries();
    },
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <tr>
      <td>{book.Id}</td>
      <td>
        {isEditing ? (
          <input
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
        ) : (
          book.Title
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            value={editedAuthor}
            onChange={(e) => setEditedAuthor(e.target.value)}
          />
        ) : (
          book.Author
        )}
      </td>
      <td style={{ display: "flex", gap: 10 }}>
        {isEditing ? (
          <button
            type="button"
            onClick={() => editBook.mutateAsync()}
            disabled={editBook.isPending}
          >
            Save
          </button>
        ) : (
          <button type="button" onClick={handleEdit}>
            Edit
          </button>
        )}
        <DeleteBook book={book} />
      </td>
    </tr>
  );
}
