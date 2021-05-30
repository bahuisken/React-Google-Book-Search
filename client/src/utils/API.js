import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  // Get Searched Books from google books api
  googleBookSearch: function (query) {
    return axios.get(BASEURL + query);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id).then((result) => result.data);
  },
  // Saves a book to saved database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData).then((result) => result.data);
  },
  // Get the saved books from the database
  savedBooks: function () {
    return axios.get("/api/books").then((result) => result.data);
  },
};
