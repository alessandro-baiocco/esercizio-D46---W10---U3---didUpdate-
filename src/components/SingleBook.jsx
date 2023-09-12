import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  state = { selected: false, commenti: [], asin: "" };

  render() {
    return (
      <Card
        style={{ border: this.props.idDelLibro === this.props.attivo ? "2px solid blue" : "2px solid red" }}
        height={"100%"}
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
