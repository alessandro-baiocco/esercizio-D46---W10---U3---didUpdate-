import { Component } from "react";
import libri from "./books/scifi.json";
import { Container, ListGroup, Row, Card, Offcanvas } from "react-bootstrap";

class AllTheBooks extends Component {
  state = {
    selectedBook: null,
  };
  render() {
    return (
      <>
        <Container fluid>
          {this.state.selectedBook ? (
            <Container className="my-3 bg-dark text-light">
              <img src={this.state.selectedBook[2]} alt={this.state.selectedBook[0]} style={{ height: "200px" }} />
              <h3>{this.state.selectedBook[0]}</h3>
              <p>{this.state.selectedBook[1]}</p>
            </Container>
          ) : (
            <></>
          )}
          <Row className="g-3">
            {libri.map((libro, index) => (
              <Card
                key={`book-${index}`}
                className="col-xl-3 col-md-4 col-6 "
                onClick={() => this.setState({ selectedBook: [libro.title, libro.price, libro.img] })}
              >
                <img src={libro.img} className="card-img-top" alt={libro.title} style={{ objectFit: "contain" }} />
                <div className="card-body">
                  <h5 className="card-title">{libro.title}</h5>
                </div>
                <ListGroup className="list-group list-group-flush">
                  <li className="list-group-item">{libro.category}</li>
                  <li className="list-group-item">{libro.price}</li>
                  <li className="list-group-item">{index}</li>
                </ListGroup>
              </Card>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default AllTheBooks;
