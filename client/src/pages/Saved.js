import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import SavedResultList from "../components/SavedResultList";

class Saved extends Component {
  state = {
    savedBooks: [],
  };

  componentDidMount() {
    API.savedBooks()
      .then((savedBooks) => this.setState({ savedBooks: savedBooks }))
      .catch((err) => console.error(err));
  }

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
              <h3>Your Saved Books</h3>
            </Jumbotron>
            <SavedResultList results={this.state.savedBooks} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
