import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import SearchForm from "../components/SearchForm";
import SearchResultList from "../components/SearchResultList";
// import { Input, TextArea, FormBtn } from "../components/Form";

class Search extends Component {
  state = {
    search: "",
    results: [],
  };

  componentDidMount() {
    this.searchBooks();
  }

  createBook = (bookData) => {
    return {
      _id: bookData.id,
      title: bookData.volumeInfo.title,
      authors: bookData.volumeInfo.authors,
      description: bookData.volumeInfo.description,
      image: bookData.volumeInfo.imageLinks.thumbnail,
      link: bookData.volumeInfo.previewLink,
    };
  };

  searchBooks = (query) => {
    if (query !== undefined) {
      API.googleBookSearch(query)
        .then((res) =>
          this.setState({
            results: res.data.items.map((bookData) =>
              this.createBook(bookData)
            ),
          })
        )
        .catch((err) => console.log(err));
    } else {
      return;
    }
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="12">
            <Jumbotron>
              <h1>
                React{" "}
                <img
                  src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                  style={{ height: "2.5rem" }}
                  alt="Google Logo"
                />{" "}
                Book Search
              </h1>
              <h3>Search for and Save Books of Interest</h3>
            </Jumbotron>
            <SearchForm
              search={this.state.search}
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
            />
            <SearchResultList results={this.state.results} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
