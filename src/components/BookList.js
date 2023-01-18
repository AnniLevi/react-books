import BookShow from "./BookShow";

function BookList({ books, onDelete }) {
  const renderedBooks = books.map((book) => {
    return <BookShow onDelete={onDelete} book={book} key={book.id} />;
  });

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
