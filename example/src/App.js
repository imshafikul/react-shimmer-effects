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
        <CircularImage size={300} center={true} />
        <Thumbnail height={300} width={500} center={false} cssClasses="m-0" />
        <Separator />

        <Card cssClasses="p-30">
          <Thumbnail center={false} cssClasses="m-0" />
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
            <CategoryItem hasImage={false} />

            <CategoryItem
              hasImage={true}
              imageType="thumbnail"
              imageWidth={100}
              imageHeight={100}
            />

            <CategoryItem
              hasImage={true}
              imageType="circular"
              imageWidth={100}
              imageHeight={100}
            />

            <CategoryItem
              hasImage={true}
              imageType="thumbnail"
              imageWidth={100}
              imageHeight={100}
              text={false}
            />

            <CategoryItem
              hasImage={true}
              imageType="circular"
              imageWidth={100}
              imageHeight={100}
              text={false}
            />

            <CategoryItem
              hasImage={true}
              imageType="thumbnail"
              imageWidth={100}
              imageHeight={100}
              title={false}
            />

            <CategoryItem
              hasImage={true}
              imageType="circular"
              imageWidth={100}
              imageHeight={100}
              title={false}
              cta={true}
              contentCenter={true}
            />
          </Card>
        </div>
      </div>
    );
  }
}
