import { Component } from "react";
import { Card, Container } from "react-bootstrap";
import FormComment from "./FormComment";
import CommentZone from "./CommentZone";

class SingleBook extends Component {
  state = { selected: false, commenti: [], asin: "" };
  componentDidUpdate(prevProps, prevState) {
    if (this.props.idDelLibro === this.props.attivo) {
      this.setState({ selected: true });
      console.log(this.props.idDelLibro, this.props.attivo);
    }
  }

  render() {
    return (
      <Card
        style={{ border: this.state.selected ? "2px solid blue" : "2px solid red" }}
        onClick={() => {
          this.setState({ selected: true });
          this.setState({ asin: `${this.props.idDelLibro}` });
        }}
      >
        <img src={this.props.image} className="card-img-top" alt={this.props.title} />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
        </div>
        <span>
          <p>{this.props.idDelLibro}</p>
          {this.state.commenti.map((com, index) => (
            <span key={`comment-${index}`}>
              <p style={{ border: "solid black 1px" }}>
                {com.comment} | {com.rate} stelle / 5
              </p>
            </span>
          ))}
        </span>
      </Card>
    );
  }
}

export default SingleBook;
