import { Component } from "react";
import { Alert, Button, Spinner } from "react-bootstrap";
import FormComment from "./FormComment";

class CommentZone extends Component {
  state = { comment: "", loading: true, error: false, alert: true };
  elimina = async (id) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`, {
        headers: {
          method: "DELETE",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGZhMDFiOWU4NDIyNzAwMTRjMzI2NzgiLCJpYXQiOjE2OTQxMDYwNDEsImV4cCI6MTY5NTMxNTY0MX0._hgr0vEr6UjtJtfjfmSqCU3Cl0ZLLLXpFwWscccB2NI",
        },
      });
      if (response.ok) {
        alert("eliminato correttamente");
      } else {
        alert("nope");
      }
    } catch (err) {
      console.log(err);
    }
  };

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
        this.setState({ loading: false });
      } else {
        this.setState({ loading: false });
        this.setState({ error: true });
        this.setState({ status: response.status });
      }
    } catch (err) {
      console.log(err);
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      this.fetchatutto();
      console.log(this.props, prevProps);
    }
  }

  render() {
    return (
      <span>
        {this.props.asinId && this.state.loading && (
          <div className="text-center my-3">
            <Spinner variant="info" />
          </div>
        )}
        {this.state.error && this.state.alert && (
          <Alert variant="danger" onClose={() => this.setState({ alert: false })}>
            <Alert.Heading>something wrong</Alert.Heading>
            <p>you got error: {this.state.status}</p>
          </Alert>
        )}

        {this.state.comment && (
          <>
            <h1> commenti </h1>
            {this.state.comment &&
              this.props.asinId &&
              this.state.comment
                .filter((comm) => comm.elementId === this.props.asinId)
                .map((comm, index) => (
                  <p style={{ border: "solid black 1px" }} key={`comm-${index}`}>
                    {comm.comment} | {comm.rate} stelle / 5
                    <Button onClick={() => this.elimina(comm._id)} variant="danger" className="ms-2">
                      <i className="bi bi-trash-fill"></i>
                    </Button>
                  </p>
                ))}
            <FormComment id={this.props.asinId} />
          </>
        )}
      </span>
    );
  }
}

export default CommentZone;
