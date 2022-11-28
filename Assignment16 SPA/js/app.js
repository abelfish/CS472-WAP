/**
 * app.js
 */
"use strict";
import { displayBooks } from "./modules/services/controller/bookController.js";

(function () {

  const $main = $("#main");

  $(document.body).on("click", "a", function (evt) {
    evt.preventDefault();
    window.history.pushState({}, "", evt.target.href);
    const $target = window.location.href.split("#")[1];
    if ($target === "books") {
      $main.load("./views/booksList.html");
      displayBooks();
    }
    if ($target === "home") {
      document.location = "index.html";
    }
    if ($target === "addBook") {
      $main.load("./views/addNewBook.html");
    }
  });
})();
