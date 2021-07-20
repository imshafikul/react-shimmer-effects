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
  PostItem,
  PostDetails,
  PostList,
  ContentBlock,
} from "shimmer-react";
import "bootstrap/dist/css/bootstrap.min.css";
import CodePreview from "./components/CodePreview";
import { code } from "./configs";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className="d-flex justify-content-between">
          Elements <CodePreview title="Elements" code={code.ELEMENTS} />
        </h1>
        <Button size="sm" />
        <Button size="md" />
        <Button size="lg" />
        <Badge width={200} />
        <Title />
        <Title line={3} variant="secondary" />
        <Text />
        <CircularImage size={300} />
        <Thumbnail height={300} width={500} className="m-0" rounded />
        <Separator />
        <h1>Gallery</h1>
        <p className="d-flex justify-content-between">
          Circular Image Gallery with Caption
          <CodePreview
            title="Circular Image Gallery with caption"
            code={code.CIRCULAR_IMAGE_GALLERY_WITH_CAPTION}
          />
        </p>
        <SimpleGallery imageType="circular" imageHeight={200} caption />
        <p className="d-flex justify-content-between">
          Thumbnail Image Gallery{" "}
          <CodePreview
            title="Thumbnail Image Gallery"
            code={code.THUMBNAIL_IMAGE_GALLERY}
          />
        </p>
        <SimpleGallery card imageHeight={300} />
        <br />
        <p className="d-flex justify-content-between">
          Thumbnail Image Gallery with Caption{" "}
          <CodePreview
            title="Thumbnail Image Gallery"
            code={code.THUMBNAIL_IMAGE_GALLERY_WITH_CAPTION}
          />
        </p>
        <SimpleGallery card imageHeight={300} caption />
        <br />
        <p className="d-flex justify-content-between">
          Featured Gallery{" "}
          <CodePreview
            title="Thumbnail Image Gallery"
            code={code.FEATURED_GALLERY}
          />
        </p>
        <FeaturedGallery row={3} col={2} card frameHeight={600} />
        <Separator />
        <h1 className="d-flex justify-content-between">
          Table{" "}
          <CodePreview title="Thumbnail Image Gallery" code={code.TABLE} />
        </h1>
        <Table row={10} />
        <Separator />
        <h1 className="d-flex justify-content-between">
          Social Post{" "}
          <CodePreview title="Social Post" code={code.SOCIAL_POST} />
        </h1>
        <div className="shimmer-row">
          <div className="shimmer-col">
            <SocialPost type="image" />
            <SocialPost type="both" />
          </div>
          <div className="shimmer-col">
            <SocialPost type="text" />
            <SocialPost type="text" title />
          </div>
        </div>
        <Separator />
        <h1>Category Item & List</h1>
        <div className="shimmer-row">
          <div className="shimmer-col">
            <p className="d-flex justify-content-between">
              Category Items{" "}
              <CodePreview title="Category Items" code={code.CATEGORY_ITEMS} />
            </p>
            <Card paddingSize={30}>
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
            <p className="d-flex justify-content-between">
              Category List{" "}
              <CodePreview title="Category List" code={code.CATEGORY_LISTS} />
            </p>
            <CategoryList title items={6} categoryStyle="STYLE_SEVEN" />
          </div>
        </div>
        <Separator />
        <h1 className="d-flex justify-content-between">
          Post Item <CodePreview title="Post Item" code={code.POST_ITEMS} />
        </h1>
        <div className="shimmer-row">
          <div className="shimmer-col">
            <PostItem card title text cta />
          </div>
          <div className="shimmer-col">
            <PostItem card title cta />
          </div>
          <div className="shimmer-col">
            <PostItem
              card
              title
              cta
              imageType="thumbnail"
              imageWidth={80}
              imageHeight={80}
              contentCenter
            />
          </div>
        </div>
        <Separator />
        <h1 className="d-flex justify-content-between">
          Post List <CodePreview title=" Post List" code={code.POST_LIST} />
        </h1>
        <PostList postStyle="STYLE_FOUR" col={3} row={2} gap={30} />
        <Separator />
        <h1 className="d-flex justify-content-between">
          Post Details{" "}
          <CodePreview title="Post Details" code={code.POST_DETAILS} />
        </h1>
        <PostDetails card cta variant="SIMPLE" />
        <PostDetails card cta variant="EDITOR" />
        <Separator />

        <h1 className="d-flex justify-content-between">
          Content Blocks{" "}
          <CodePreview title="Content Blocks" code={code.CONTENT_BLOCK} />
        </h1>
        <ContentBlock
          title
          text
          cta
          thumbnailWidth={370}
          thumbnailHeight={370}
        />
        <ContentBlock
          title
          text
          cta
          thumbnailWidth={370}
          thumbnailHeight={370}
        />
      </div>
    );
  }
}
