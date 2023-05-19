import Book from "./Book";
//importing a specific item
import { books } from "./books";
const BookList = () => {
  return (
    <>
      <h1>Amazon Best Seller</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
};
//we only have one default export
export default BookList;
