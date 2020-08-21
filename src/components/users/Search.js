import React, { Component } from "react";
import propTypes from "prop-types";

class Search extends Component {
  state = {
    text: "",
  };

  static propTypes = {
    searchUsers: propTypes.func.isRequired,
    clearUsers: propTypes.func.isRequired,
    showClear: propTypes.bool.isRequired,
    setAlert: propTypes.func.isRequired,
  };

  onChange = (event) => {
    this.setState({ text: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert(" Please enter something", "light");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  };

  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Seach"
            className="btn btn-dark btn-block"
          />
        </form>
        {showClear ? (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        ) : null}
      </div>
    );
  }
}

export default Search;
