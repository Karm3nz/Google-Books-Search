import React from "react";
// import API from "../../utils/API";
import ResultsListObj from "../ResultsListObj";

class ResultsList extends React.Component {
    render() {
        return (
            this.props.bookState.map((book) => (
            <ResultsListObj
            key={book.id}
            id={book.id}
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors && book.volumeInfo.authors.length > 1 ? book.volumeInfo.authors.join(", ") : book.volumeInfo.authors}
            image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://previews.123rf.com/images/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-no-image-available-icon-flat-vector.jpg"}
            description={book.volumeInfo.description}
            link={book.volumeInfo.previewLink}
            saveGoogleBook={this.props.saveGoogleBook}
            />
            ))
        )
                           
    }
}

export default ResultsList;