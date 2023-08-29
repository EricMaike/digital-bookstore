import React, { useState, useEffect } from 'react';
import Book from './Book';

const fakeBooks = [
  { id: 1, volumeInfo: { title: 'Livro 1' } },
  { id: 2, volumeInfo: { title: 'Livro 2' } },
];

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=list=bestsellers&key=AIzaSyBlEm929GyIni5Ruq1P80IRi1O41g2sGb0')
      .then(response => response.json())
      .then(data => {
        if (data.items) {
          setBooks(data.items)
        }
      })
      .catch(error => console.error('Erro ao buscar dados da API:', error));
  }, []);

  return (
    <section className="book-list">
      <div className="container">
        <h2>Livros em Destaque</h2>
        <div className="row">
          {fakeBooks.map(book => (
            <div key={book.id} className="col-md-4">
              <Book book={book.volumeInfo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BookList;
