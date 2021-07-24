const code = {
  ELEMENTS: `import {
  ShimmerButton,
  ShimmerTitle,
  ShimmerText,
  ShimmerCircularImage,
  ShimmerThumbnail,
  ShimmerBadge,
  ShimmerTableCol,
  ShimmerTableRow,
} from "shimmer-react";

const YourComponent = () => {
  return (
    <div>
      <ShimmerButton size="sm" />
      <ShimmerButton size="md" />
      <ShimmerButton size="lg" />
      <ShimmerBadge width={200} />
      <ShimmerTitle />
      <ShimmerTitle line={3} variant="secondary" />
      <ShimmerText />
      <ShimmerCircularImage size={300} />
      <ShimmerThumbnail height={300} width={500} className="m-0" rounded />
    </div>
  );
};

ReactDOM.render(<YourComponent />, document.getElementById("root"));
`,
  CIRCULAR_IMAGE_GALLERY_WITH_CAPTION: `import { ShimmerSimpleGallery } from "shimmer-react";

const YourComponent = () => {
  return <ShimmerSimpleGallery imageType="circular" imageHeight={200} caption />;
};

ReactDOM.render(<YourComponent />, document.getElementById("root"));`,
  THUMBNAIL_IMAGE_GALLERY: `import { ShimmerSimpleGallery } from "shimmer-react";

const YourComponent = () => {
  return <ShimmerSimpleGallery card imageHeight={300} />;
};

ReactDOM.render(<YourComponent />, document.getElementById("root"));`,
  THUMBNAIL_IMAGE_GALLERY_WITH_CAPTION: `import { ShimmerSimpleGallery } from "shimmer-react";

const YourComponent = () => {
  return <ShimmerSimpleGallery card imageHeight={300} caption />;
};

ReactDOM.render(<YourComponent />, document.getElementById("root"));`,
  FEATURED_GALLERY: `import { ShimmerFeaturedGallery } from "shimmer-react";

const YourComponent = () => {
  return <ShimmerFeaturedGallery row={3} col={2} card frameHeight={600} />;
};

ReactDOM.render(<YourComponent />, document.getElementById("root"));`,
  TABLE: `import { ShimmerTable } from "shimmer-react";

const YourComponent = () => {
  return <ShimmerTable row={10} />;
};

ReactDOM.render(<YourComponent />, document.getElementById("root"));`,
  SOCIAL_POST: `import { ShimmerSocialPost } from "shimmer-react";

const YourComponent = () => {
  return (
    <div>
      <ShimmerSocialPost type="image" />
      <ShimmerSocialPost type="both" />
      <ShimmerSocialPost type="text" />
      <ShimmerSocialPost type="text" title />
    </div>
  );
};

ReactDOM.render(<YourComponent />, document.getElementById("root"));`,

  POST_ITEMS: `import { ShimmerPostItem } from "shimmer-react";

const YourComponent = () => {
  return (
    <div>
      <ShimmerPostItem card title text cta />
      <ShimmerPostItem card title cta />
      <ShimmerPostItem
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
  POST_LIST: `import { ShimmerPostList } from "shimmer-react";

const YourComponent = () => {
  return <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={2} gap={30} />;
};

ReactDOM.render(<YourComponent />, document.getElementById("root"));`,
  POST_DETAILS: `import { ShimmerPostDetails } from "shimmer-react";

const YourComponent = () => {
  return (
    <div>
      <ShimmerPostDetails card cta variant="SIMPLE" />
      <ShimmerPostDetails card cta variant="EDITOR" />
    </div>
  );
};

ReactDOM.render(<YourComponent />, document.getElementById("root"));`,
  CONTENT_BLOCK: `import { ShimmerContentBlock } from "shimmer-react";

const YourComponent = () => {
  return (
    <div>
      <ShimmerContentBlock title text cta thumbnailWidth={370} thumbnailHeight={370} />
      <ShimmerContentBlock title text cta thumbnailWidth={370} thumbnailHeight={370} />
    </div>
  );
};

ReactDOM.render(<YourComponent />, document.getElementById("root"));`,
  CATEGORY_ITEMS: `import { ShimmerCategoryItem } from "shimmer-react";

const YourComponent = () => {
  return (
    <div>
      <ShimmerCategoryItem />

      <ShimmerCategoryItem
        hasImage
        imageType="thumbnail"
        imageWidth={100}
        imageHeight={100}
        title
      />

      <ShimmerCategoryItem
        hasImage
        imageType="circular"
        imageWidth={100}
        imageHeight={100}
        title
      />

      <ShimmerCategoryItem
        hasImage
        imageType="thumbnail"
        imageWidth={100}
        imageHeight={100}
        text
      />

      <ShimmerCategoryItem
        hasImage
        imageType="circular"
        imageWidth={100}
        imageHeight={100}
        text
      />

      <ShimmerCategoryItem
        hasImage
        imageType="thumbnail"
        imageWidth={100}
        imageHeight={100}
        text
        cta
      />

      <ShimmerCategoryItem
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
  CATEGORY_LISTS: `import { ShimmerCategoryList } from "shimmer-react";

const YourComponent = () => {
  return <ShimmerCategoryList title items={6} categoryStyle="STYLE_SEVEN" />;
};

ReactDOM.render(<YourComponent />, document.getElementById("root"));`,
};

export { code };
