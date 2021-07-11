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
  CategoryList,
  PostDetails,
} from "shimmer-react";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Elements</h1>
        <Button size="sm" />
        <Button size="md" />
        <Button size="lg" />
        <Badge width={200} />
        <Title />
        <Title line={3} variant="secondary" />
        <Text />
        <CircularImage size={300} />
        <Thumbnail height={300} width={500} cssClasses="m-0" />
        <Separator />
        <Separator />

        <h1>Gallery</h1>

        <Card cssClasses="p-20">
          <SimpleGallery />
        </Card>

        <Card cssClasses="p-20">
          <FeaturedGallery row={2} col={2} />
        </Card>

        <h1>Table</h1>
        <Table row={10} />

        <h1>Social Post</h1>

        <div className="shimmer-row">
          <div className="shimmer-col">
            <SocialPost type="image" />
            <SocialPost type="both" />
          </div>
          <div className="shimmer-col">
            <SocialPost type="text" />
          </div>
        </div>
        <h1>Category Item & List</h1>
        <div className="shimmer-row">
          <div className="shimmer-col">
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
            </Card>
          </div>
          <div className="shimmer-col">
            <CategoryList title items={6} style="STYLE_SEVEN" />
          </div>
        </div>

        <h1>Post Details</h1>
        <PostDetails card cta variant="SIMPLE" />
        <PostDetails card cta variant="EDITOR" />
        <Separator />
        <Separator />
        <Separator />
        <Separator />
        <Separator />
      </div>
    );
  }
}
