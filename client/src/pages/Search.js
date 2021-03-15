import React from "react";
import API from "../utils/API";
import { Row, Container } from "../components/Grid";
// import Nav from "../components/Nav"
import {Input, SubmitBtn} from "../components/Search";
// import Form from "../components/Form";
// import Results from "";
import ResultsList from "../components/ResultsList";



class Search extends React.Component {
  state = {
    books: [],
    search: ""
  };

  searchBooks = () => {
    API.getBook(this.state.search)
    .then(res => {
      this.setState({
      books: res.data.items,
      search: ""
      })
    })
    .catch(err => console.log(err));      
  };

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks();
  };

  saveGoogleBook = currentBook => {
    API.saveBook({
      id: currentBook.id,
      title: currentBook.title,
      authors: currentBook.authors,
      description: currentBook.description,
      image: currentBook.image,
      link: currentBook.link
    })
    .then(res => console.log("Successful POST to DB!", res))
    .catch(err => console.log("this is an error", err));
  }
  render() {
    return (
      <Container fluid>
        <Row>
          <form>
            <h5 style={{marginTop: "10px"}}>Search for books</h5>
            <Input 
              value={this.state.search}
              onChange={this.handleInputChange}
              name="search"
              placeholder="e.g. Harry Potter"
            />
            <SubmitBtn onClick={this.handleFormSubmit}/>
          </form>
        </Row>
        <Row>
          {this.state.books.length ? (
            <ResultsList 
              bookState={this.state.books}
              saveGoogleBook={this.saveGoogleBook}>
              <div className="card-header">Results</div>
            </ResultsList>) : (
            <div>
              <hr/>
              <p style={{fontStyle: "italic"}}>No results to display :(</p>
            </div>
          )}
        </Row>
      </Container>
    );
  }
}

export default Search;

