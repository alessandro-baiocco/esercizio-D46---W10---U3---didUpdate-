import { Component } from "react";

class CommentZone extends Component {
  state = { comment: "" };
  fetchatutto = async (e) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGZhMDFiOWU4NDIyNzAwMTRjMzI2NzgiLCJpYXQiOjE2OTQxMDYwNDEsImV4cCI6MTY5NTMxNTY0MX0._hgr0vEr6UjtJtfjfmSqCU3Cl0ZLLLXpFwWscccB2NI",
        },
      });
      if (response.ok) {
        const Data = await response.json();
        this.setState({ comment: Data });
      } else {
        alert("nope");
      }
    } catch (err) {
      console.log(err);
    }
  };
  componentDidMount() {
    this.fetchatutto();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      this.fetchatutto();
      console.log(this.props, prevProps);
    }
  }

  render() {
    return (
      <span>
        {this.state.comment &&
          this.props.asinId &&
          this.state.comment
            .filter((comm) => comm.elementId === this.props.asinId)
            .map((comm, index) => (
              <p style={{ border: "solid black 1px" }} key={`comm-${index}`}>
                {comm.comment} | {comm.rate} stelle / 5
              </p>
            ))}
      </span>
    );
  }
}

export default CommentZone;
