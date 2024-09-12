import { dryrun } from "@permaweb/aoconnect";
import { useQuery } from "@tanstack/react-query";
import { BOOKS } from "../constants/books_process";

import BookRow from "./book-row";

type Book = {
  Id: number;
  Title: string;
  Author: string;
};

export default function BooksTable() {
  const {
    data: books,
    error,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["Get-Books"],
    queryFn: async () => {
      const dryrunResult = await dryrun({
        process: BOOKS,
        tags: [
          {
            name: "Action",
            value: "Get-Books",
          },
        ],
      });

      if (dryrunResult.Messages[0].Data) {
        return JSON.parse(dryrunResult.Messages[0].Data) as Book[];
      }

      return undefined;
    },
    refetchOnWindowFocus: false,
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading || isFetching) {
    return (
      <table id="books-table">
        <thead>
          <th>ID</th>
          <th>Book Title</th>
          <th>Author</th>
          <th>Actions</th>
        </thead>
        <tbody>
          <tr>
            <td colSpan={4}>Loading...</td>
          </tr>
        </tbody>
      </table>
    );
  }

  return (
    <div>
      {!books ? (
        "Books not found"
      ) : (
        <table id="books-table">
          <thead>
            <th>ID</th>
            <th>Book Title</th>
            <th>Author</th>
            <th>Actions</th>
          </thead>
          {books.map((book) => (
            <BookRow key={book.Id} book={book} />
          ))}
        </table>
      )}
    </div>
  );
}
