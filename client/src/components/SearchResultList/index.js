import React, { Component } from "react";
import API from "../../utils/API";

class SearchResultList extends Component {
  state = {
    savedBooks: [],
  };

  componentDidMount() {
    API.savedBooks()
      .then((savedBooks) => this.setState({ savedBooks: savedBooks }))
      .catch((err) => console.error(err));
  }

  // Function to handle the saving of books
  handleBookSave = (book) => {
    if (this.state.savedBooks.map((book) => book._id).includes(book._id)) {
      API.deleteBook(book._id)
        .then((deletedBook) =>
          this.setState({
            savedBooks: this.state.savedBooks.filter(
              (book) => book._id !== deletedBook._id
            ),
          })
        )
        .catch((err) => console.error(err));
    } else {
      API.saveBook(book)
        .then((savedBook) =>
          this.setState({
            savedBooks: this.state.savedBooks.concat([savedBook]),
          })
        )
        .catch((err) => console.error(err));
    }
  };
  render() {
    return (
      <div className="card mb-3">
        <div className="card-header text-dark">Results</div>
        <div className="card-body">
          {/* If no search reults, display text */}
          {!this.props.results.length ? (
            <h2>No Search Results to display</h2>
          ) : (
            ""
          )}
          {this.props.results.map((result) => (
            <>
              {/* If a book in the search results is on the saved list, don't display it */}
              {this.state.savedBooks
                .map((book) => book._id)
                .includes(result._id) ? (
                ""
              ) : (
                <div
                  className="card border-secondary mb-3  bg-light bg-light"
                  data-key={result._id}
                  key={result._id}
                >
                  <div className="card-body text-secondary">
                    <div className="row mb-3 px-2">
                      <div className="col-2">
                        <img
                          alt={result.title}
                          className="img-fluid mt-3"
                          src={result.image || "https://placehold.it/128x192"}
                        />
                      </div>
                      <div className="col-md-10">
                        <div className="card-body">
                          <h5 className="card-title text-dark">
                            {result.title} by {result.authors}
                          </h5>
                          <p className="card-text">{result.description}</p>
                          <p className="card-text">
                            <a
                              className="btn btn-success"
                              href={result.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              role="button"
                            >
                              View
                            </a>{" "}
                            <button
                              onClick={() => this.handleBookSave(result)}
                              className="btn btn-warning"
                            >
                              Save
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    );
  }
}

export default SearchResultList;
