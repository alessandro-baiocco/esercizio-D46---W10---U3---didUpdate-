import { Component } from "react";
import SingleBook from "./SingleBook";
import { Container, ListGroup, Row, Card, Offcanvas, Col } from "react-bootstrap";

class BookList extends Component {
  state = {
    search: "",
  };

  filtra = (query) => {
    this.setState({ search: query });
  };
  render() {
    return (
      <>
        <input type="text" onChange={(Event) => this.filtra(Event.target.value)} />
        <Row className="lista">
          {this.props.lista
            .filter((book) => book.title.toLowerCase().includes(this.state.search.toLowerCase()))
            .map((book, index) => (
              <Col
                xs={6}
                md={4}
                lg={3}
                key={`book-${index}`}
                onClick={() => {
                  this.props.checkAsinId(book.asin);
                  this.setState({ selected: `${book.asin}` });
                }}
              >
                <SingleBook title={book.title} image={book.img} idDelLibro={book.asin} attivo={this.state.selected} />
              </Col>
            ))}
        </Row>
      </>
    );
  }
}

export default BookList;
