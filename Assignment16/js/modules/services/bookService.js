/**
 * bookService.js
 *
 */
"use strict";

export async function getBooks() {
  try {
    const response = await fetch(
      "https://elibraryrestapi.herokuapp.com/elibrary/api/book/list"
    );
    const books = await response.json();
    return books;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function addBook(book) {
  try {
    const response = await fetch(
      "https://elibraryrestapi.herokuapp.com/elibrary/api/book/add",
      {
        method: "POST",
        body: JSON.stringify(book),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const bookAdded = await response.json();
    return bookAdded;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
