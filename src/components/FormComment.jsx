import { Component } from "react";

class FormComment extends Component {
  state = {
    comment: "",
    rate: "1",
  };

  handleChange = (propertyName, propertyValue, elementId, id) => {
    this.setState({ [propertyName]: propertyValue });
    this.setState({ [elementId]: id });
  };
  invia = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGY5YmEyYzhkM2Q0OTAwMTRjZmQ3ZDUiLCJpYXQiOjE2OTQwODc3MjUsImV4cCI6MTY5NTI5NzMyNX0.nEiDclrZwDUhekBj6bTeWNg02Po6mpUkGwWJAlqgIBE",
        },
      });
      if (response.ok) {
        alert("andato a buon fine");
      } else {
        alert("nope");
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <>
        <form action="" onSubmit={() => this.setState()}>
          <input
            type="text"
            value={this.state.comment}
            onChange={(event) => {
              this.setState({ comment: event.target.value, elementId: this.props.idDelLibro });
            }}
          />
          <input
            type="number"
            min={1}
            max={5}
            value={this.state.rate}
            onChange={(event) => {
              this.setState({ rate: event.target.value });
            }}
          />
          <button type="submit" onClick={(Event) => this.invia(Event)}>
            invia
          </button>
        </form>
      </>
    );
  }
}

export default FormComment;
