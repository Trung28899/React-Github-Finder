import React, { Component } from "react";
import PropTypes from "prop-types";

export class Navbar extends Component {
  // default props will props default values in case nothing is passed in as props
  static defaultProps = {
    title: " Github Finder",
    icon: "fab fa-github",
  };

  // determine the data type of props
  // if something is passed in that is not a string > will get error
  // in the console
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={this.props.icon} />
          {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
