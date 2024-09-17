import AddBook from "./add-book";
import BooksTable from "./books-table";

export default function BooksCrud() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      <BooksTable />
      <AddBook />
    </div>
  );
}
