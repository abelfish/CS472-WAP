/**
 * formController.js
 */
"use strict";
import { addBook } from "../bookService.js";

document.forms[0].addEventListener("submit", async (evt) => {
  evt.preventDefault();
  const newBook = {
    isbn: $("#isbn").val(),
    title: $("#bookTitle").val(),
    overdueFee: $("#overdueFee").val(),
    publisher: $("#publisher").val(),
    datePublished: $("#datePublished").val(),
  };
  try {
    const bookAdded = await addBook(newBook);
    document.getElementById("booksButton").click();
    console.log(bookAdded);
  } catch (error) {
    console.log(error);
  }
});
