import React from "react";
import { Container } from "../components/Grid";
import API from "../utils/API";
import SavedList from "../components/SavedList";

class Saved extends React.Component {
  state = {
    savedBooks: []
  }

  componentDidMount = () => {
    this.getBooks()
  }

  deleteGoogleBook = (currentBook) => {
    API.deleteBook( currentBook.id )
    .then(res => {
      console.log("You deleted this book:", res);
      this.getBooks();
    })
    .catch(err => {
      console.log("This is an error", err);
    })
  }

  getBooks = () => {
    API.getBooks()
    .then(res => {
      this.setState({
        savedBooks: res.data
      })
      console.log("This is the res from getBooks", res);
      })
    .catch(err => {
      console.log("This is an error", err);
    })
  }

  render() {
    return (
      <div>
        <Container fluid>
          {this.state.savedBooks.length ? (
          <SavedList 
            bookState={this.state.savedBooks}
            deleteGoogleBook={this.deleteGoogleBook}></SavedList>) : (
          <h5 className="text-center" style={{marginTop: "30px"}} >No results to display :(</h5>
          )}
        </Container>
      </div>
    )
  }
}

export default Saved;
