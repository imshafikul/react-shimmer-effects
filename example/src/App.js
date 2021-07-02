import React, { Component } from "react";
import {
  Button,
  CircularImage,
  Thumbnail,
  Card,
  SimpleGallery,
  FeaturedGallery,
  TableCol,
  TableRow,
  Table,
  Badge,
  Text,
} from "shimmer-react";

export default class App extends Component {
  render() {
    return (
      <div>
        <Button size="sm" />
        <Button size="md" />
        <Button size="lg" />
        <CircularImage size={300} center={true} />
        <Thumbnail height={300} width={500} center={false} cssClasses="m-0" />
        <hr />
        <Card cssClasses="p-30">
          <Thumbnail center={false} cssClasses="m-0" />
        </Card>
        <br />
        <hr />
        <Card cssClasses="p-20">
          <SimpleGallery />
        </Card>
        <br />
        <hr />
        <Card cssClasses="p-20">
          <FeaturedGallery row={4} col={4} />
        </Card>

        <Table row={10} />
        <br />
        <br />
        <Badge width={200} />
        <br />
        <br />
        <Text />
      </div>
    );
  }
}
