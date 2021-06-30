import React, { Component } from "react";
import { Button } from "shimmer-react";

export default class App extends Component {
  render() {
    return (
      <div>
        <Button size="sm" />
        <Button size="md" />
        <Button size="lg" />
      </div>
    );
  }
}
