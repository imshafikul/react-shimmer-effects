import React, { Component } from "react";
import { Button, CircularImage, Thumbnail } from "shimmer-react";

export default class App extends Component {
  render() {
    return (
      <div>
        <Button size="sm" />
        <Button size="md" />
        <Button size="lg" />
        <CircularImage size={300} center={true} />
        <Thumbnail height={300} width={500} center={false} />
      </div>
    );
  }
}
