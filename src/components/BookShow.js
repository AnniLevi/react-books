function BookShow({ book, onDelete }) {
  const handleClick = () => {
    onDelete(book.id);
  };

  return (
    <div className="book-show">
      {book.title}
      <div className="actions" onClick={handleClick}>
        <button className="delete">Delete</button>
      </div>
    </div>
  );
}

export default BookShow;
