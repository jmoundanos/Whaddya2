import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
//import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";

class Options extends Component {
  
  
  state = {
    
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  // componentDidMount() {
  //   API.getBook(this.props.match.params.id)
  //     .then(res => this.setState({ book: res.data }))
  //     .catch(err => console.log(err));
  // }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
          
              <h1>
                Options
              </h1>
           
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            {/* <Link to="/">← Back to Authors</Link> */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Options;
