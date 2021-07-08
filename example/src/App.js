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
  Title,
  SocialPost,
  Separator,
  CategoryItem,
} from "shimmer-react";

export default class App extends Component {
  render() {
    return (
      <div>
        <Button size="sm" />
        <Button size="md" />
        <Button size="lg" />
        <CircularImage size={300} center />
        <Thumbnail height={300} width={500} cssClasses="m-0" />
        <Separator />

        <Card cssClasses="p-30">
          <Thumbnail cssClasses="m-0" />
        </Card>
        <Separator />

        <Card cssClasses="p-20">
          <SimpleGallery />
        </Card>
        <Separator />

        <Card cssClasses="p-20">
          <FeaturedGallery row={4} col={4} />
        </Card>
        <Table row={10} />
        <Separator />

        <Badge width={200} />
        <Separator />

        <Text />
        <Separator />

        <Title />
        <Separator />

        <Title line={3} variant="secondary" />
        <Separator />

        <div className="shimmer-row">
          <div className="shimmer-col">
            <SocialPost type="image" />
            <SocialPost type="both" />
          </div>
          <div className="shimmer-col">
            <SocialPost type="text" />
          </div>
        </div>
        <Separator />
        <div className="w-40">
          <Card cssClasses="p-30">
            <CategoryItem />

            <CategoryItem
              hasImage
              imageType="thumbnail"
              imageWidth={100}
              imageHeight={100}
              title
            />

            <CategoryItem
              hasImage
              imageType="circular"
              imageWidth={100}
              imageHeight={100}
              title
            />

            <CategoryItem
              hasImage
              imageType="thumbnail"
              imageWidth={100}
              imageHeight={100}
              text
            />

            <CategoryItem
              hasImage
              imageType="circular"
              imageWidth={100}
              imageHeight={100}
              text
            />

            <CategoryItem
              hasImage
              imageType="thumbnail"
              imageWidth={100}
              imageHeight={100}
              text
              cta
            />

            <CategoryItem
              hasImage
              imageType="circular"
              imageWidth={100}
              imageHeight={100}
              text
              cta
            />

            <CategoryItem
              hasImage
              imageType="circular"
              imageWidth={50}
              imageHeight={50}
              contentCenter
              title
            />

            <CategoryItem
              hasImage
              imageType="circular"
              imageWidth={50}
              imageHeight={50}
              contentCenter
              title
            />
          </Card>
        </div>
      </div>
    );
  }
}
