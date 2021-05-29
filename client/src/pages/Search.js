import React, { useState, useEffect, Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import SearchForm from "../components/SearchForm";
import ResultList from "../components/ResultList";
import { Input, TextArea, FormBtn } from "../components/Form";

class Search extends Component {
  state = {
    search: "",
    results: [],
  };

  // When this component mounts, search the Giphy API for pictures of kittens

  searchBooks = (query) => {
    API.googleBookSearch(query)
      .then((res) => this.setState({ results: res.data.items }))
      .catch((err) => console.log(err));
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
              <h1>React Google Book Search</h1>
              <h3>Search for and Save Books of Interest</h3>
            </Jumbotron>
            <SearchForm
              search={this.state.search}
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
            />
            <ResultList results={this.state.results} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
