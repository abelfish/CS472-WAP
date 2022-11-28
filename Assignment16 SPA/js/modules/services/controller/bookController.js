/**
 * bookController.js
 */
"use strict";

import { getBooks } from "../bookService.js";

export async function displayBooks() {
  const booksJson = await getBooks();

  let bookRows = "";
  let counter = 0;
  booksJson.forEach((book) => {
    bookRows += `
                    <tr>
                            <td>
                                ${++counter}
                            </td>
                        <td>
                            ${book.isbn}
                        </td>
                        <td>
                            ${book.title}
                        </td>
                        <td>
                            ${book.overdueFee}
                        </td>
                        <td>
                            ${book.publisher}
                        </td>
                        <td>
                            ${book.datePublished}
                        </td>
                    </tr>
                `;
  });
  document.getElementById("tableBody").innerHTML = bookRows;
}
