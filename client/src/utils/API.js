import axios from "axios";

export default {
  // Gets the book with the given id
  getBook: function(query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
   // Gets saved books from DB
   getBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
  // Gets book with the given ID
  // getBookById: function(id) {
  //   return axios.get("/api/books/" + id);
  // }
};
