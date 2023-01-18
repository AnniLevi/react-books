import BookList from "./components/BookList";
import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const handleCreateBook = (title) => {
    // BAD CODE
    // books.push({id: 123, title: title});  // modifies an existing array directly, will not be re-rendered
    // setBooks(books);

    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ]; // creates a new array, adds there an existing books and a new one to the end of the array

    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={handleCreateBook} />
    </div>
  );
}

export default App;
