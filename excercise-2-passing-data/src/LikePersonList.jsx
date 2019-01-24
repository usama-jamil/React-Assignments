import React from "react";

export default ({ BooksLikedByPeople }) =>
  BooksLikedByPeople.map(bookLikeByPeople => (
    <div>
      <h2 key={bookLikeByPeople.id}>{bookLikeByPeople.bookName}</h2>
      <p>Liked By:</p>
      <ul>
        {bookLikeByPeople.likedPeople.length !== 0 ?
         (
          bookLikeByPeople.likedPeople.map(x => <li key={x.id}>{x.name}</li>)
        ) :
         (
          <li>None of the peeps in the chart liked this book</li>
        )}
      </ul>
    </div>
  ));
