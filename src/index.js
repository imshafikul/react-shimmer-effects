/**
 * @class ExampleComponent
 */

import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.scss";
import "./styles.scss";

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string,
  };

  render() {
    const { text } = this.props;

    return (
      <div className="test">
        Example Component: <p>{text}</p>{" "}
      </div>
    );
  }
}
