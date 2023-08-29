import React from 'react';

function Book({ title }) {
  console.log(title)
  return (
    <div className="book">
      <h3>{title}</h3>
    </div>
  );
}

export default Book;