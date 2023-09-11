import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MyWelcome from "./components/MyWelcome";
import BookList from "./components/BookList";
import libri from "./components/books/scifi.json";
import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import CommentZone from "./components/CommentZone";

class App extends Component {
  state = {
    asinId: null,
  };
  checkAsinId = (Id) => {
    this.setState({ asinId: `${Id}` });
    console.log("cambiato");
  };
  render() {
    return (
      <>
        <MyNav />
        <MyWelcome title="BENVENUTO!!!" subTitle="ehi tu che stai leggendo questa frase , ciao" />
        <Row>
          <Col xs={6}>
            <BookList lista={libri} checkAsinId={this.checkAsinId} selected={this.state.asinId} />
          </Col>
          <Col xs={6}>
            <CommentZone asinId={this.state.asinId} />
          </Col>
        </Row>

        <MyFooter />
      </>
    );
  }
}

export default App;
