import React, { Component } from "react";
import { Button, CircularImage } from "shimmer-react";

export default class App extends Component {
  render() {
    return (
      <div>
        <Button size="sm" />
        <Button size="md" />
        <Button size="lg" />
        <CircularImage size={300} center={true} />
      </div>
    );
  }
}
