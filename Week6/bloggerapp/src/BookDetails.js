import { books } from './data';

// Extracted list-item component - takes a "key" when used inside .map()
function BookItem({ book }) {
  return (
    <li>
      <strong>{book.title}</strong> by {book.author} —{' '}
      {}
      <span className={book.inStock ? 'in-stock' : 'out-of-stock'}>
        {book.inStock ? 'In Stock' : 'Out of Stock'}
      </span>
    </li>
  );
}

function BookDetails() {
  return (
    <div className="panel">
      <h2>Book Details</h2>
      {}
      {books.length > 0 && (
        <ul>
          {books.map((book) => (
            <BookItem key={book.id} book={book} />
          ))}
        </ul>
      )}
      {books.length === 0 && <p>No books available.</p>}
    </div>
  );
}

export default BookDetails;
