const code = {
  ELEMENTS: `import {
  Button,
  Title,
  Text,
  CircularImage,
  Thumbnail,
  Badge,
  TableCol,
  TableRow,
} from "shimmer-react";

const YourComponent = () => {
  return (
    <div>
      <Button size="sm" />
      <Button size="md" />
      <Button size="lg" />
      <Badge width={200} />
      <Title />
      <Title line={3} variant="secondary" />
      <Text />
      <CircularImage size={300} />
      <Thumbnail height={300} width={500} className="m-0" rounded />
    </div>
  );
};

ReactDOM.render(<YourComponent />, document.getElementById("root"));
`,
  CIRCULAR_IMAGE_GALLERY_WITH_CAPTION: `import { SimpleGallery } from "shimmer-react";

const YourComponent = () => {
  return <SimpleGallery imageType="circular" imageHeight={200} caption />;
};

ReactDOM.render(<YourComponent />, document.getElementById("root"));`,
  THUMBNAIL_IMAGE_GALLERY: `import { SimpleGallery } from "shimmer-react";

const YourComponent = () => {
  return <SimpleGallery card imageHeight={300} />;
};

ReactDOM.render(<YourComponent />, document.getElementById("root"));`,
  THUMBNAIL_IMAGE_GALLERY_WITH_CAPTION: `import { SimpleGallery } from "shimmer-react";

const YourComponent = () => {
  return <SimpleGallery card imageHeight={300} caption />;
};

ReactDOM.render(<YourComponent />, document.getElementById("root"));`,
  FEATURED_GALLERY: `import { FeaturedGallery } from "shimmer-react";

const YourComponent = () => {
  return <FeaturedGallery row={3} col={2} card frameHeight={600} />;
};

ReactDOM.render(<YourComponent />, document.getElementById("root"));`,
  TABLE: `import { Table } from "shimmer-react";

const YourComponent = () => {
  return <Table row={10} />;
};

ReactDOM.render(<YourComponent />, document.getElementById("root"));`,
  SOCIAL_POST: `import { SocialPost } from "shimmer-react";

const YourComponent = () => {
  return (
    <div>
      <SocialPost type="image" />
      <SocialPost type="both" />
      <SocialPost type="text" />
      <SocialPost type="text" title />
    </div>
  );
};

ReactDOM.render(<YourComponent />, document.getElementById("root"));`,

  POST_ITEMS: `import { PostItem } from "shimmer-react";

const YourComponent = () => {
  return (
    <div>
      <PostItem card title text cta />
      <PostItem card title cta />
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
  );
};

ReactDOM.render(<YourComponent />, document.getElementById("root"));`,
  POST_LIST: `import { PostList } from "shimmer-react";

const YourComponent = () => {
  return <PostList postStyle="STYLE_FOUR" col={3} row={2} gap={30} />;
};

ReactDOM.render(<YourComponent />, document.getElementById("root"));`,
  POST_DETAILS: `import { PostDetails } from "shimmer-react";

const YourComponent = () => {
  return (
    <div>
      <PostDetails card cta variant="SIMPLE" />
      <PostDetails card cta variant="EDITOR" />
    </div>
  );
};

ReactDOM.render(<YourComponent />, document.getElementById("root"));`,
  CONTENT_BLOCK: `import { ContentBlock } from "shimmer-react";

const YourComponent = () => {
  return (
    <div>
      <ContentBlock title text cta thumbnailWidth={370} thumbnailHeight={370} />
      <ContentBlock title text cta thumbnailWidth={370} thumbnailHeight={370} />
    </div>
  );
};

ReactDOM.render(<YourComponent />, document.getElementById("root"));`,
  CATEGORY_ITEMS: `import { CategoryItem } from "shimmer-react";

const YourComponent = () => {
  return (
    <div>
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
    </div>
  );
};

ReactDOM.render(<YourComponent />, document.getElementById("root"));
`,
  CATEGORY_LISTS: `import { CategoryList } from "shimmer-react";

const YourComponent = () => {
  return <CategoryList title items={6} categoryStyle="STYLE_SEVEN" />;
};

ReactDOM.render(<YourComponent />, document.getElementById("root"));`,
};

export { code };
