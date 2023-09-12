import { Component } from "react";
import SingleBook from "./SingleBook";
import { Container, Row, Col } from "react-bootstrap";

class BookList extends Component {
  state = {
    search: "",
  };

  changeBook = (asin) => {
    this.setState({ selected: asin });
  };

  filtra = (query) => {
    this.setState({ search: query });
  };
  render() {
    return (
      <>
        <Container>
          <h4>cerca un libro</h4>
          <input type="text" onChange={(Event) => this.filtra(Event.target.value)} placeholder="cerca" />
        </Container>
        <Row className="lista">
          {this.props.lista
            .filter((book) => book.title.toLowerCase().includes(this.state.search.toLowerCase()))
            .map((book, index) => (
              <Col
                xs={6}
                md={4}
                key={`book-${index}`}
                onClick={() => {
                  this.props.checkAsinId(book.asin);
                  this.changeBook(`${book.asin}`);
                }}
                className="gy-2"
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
