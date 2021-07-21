import React from "react";
import { SimpleGallery, FeaturedGallery, Separator } from "shimmer-react";
import CodePreview from "../CodePreview";
import { code } from "../../configs";

const GalleryDemo = () => (
  <div>
    <h3>Gallery</h3>
    <div className="d-flex justify-content-between">
      Circular Image Gallery with Caption
      <CodePreview
        title="Circular Image Gallery with caption"
        code={code.CIRCULAR_IMAGE_GALLERY_WITH_CAPTION}
      />
    </div>
    <SimpleGallery imageType="circular" imageHeight={200} caption />
    <div className="d-flex justify-content-between">
      Thumbnail Image Gallery{" "}
      <CodePreview
        title="Thumbnail Image Gallery"
        code={code.THUMBNAIL_IMAGE_GALLERY}
      />
    </div>
    <SimpleGallery card imageHeight={300} />
    <br />
    <div className="d-flex justify-content-between">
      Thumbnail Image Gallery with Caption{" "}
      <CodePreview
        title="Thumbnail Image Gallery"
        code={code.THUMBNAIL_IMAGE_GALLERY_WITH_CAPTION}
      />
    </div>
    <SimpleGallery card imageHeight={300} caption />
    <br />
    <div className="d-flex justify-content-between">
      Featured Gallery{" "}
      <CodePreview
        title="Thumbnail Image Gallery"
        code={code.FEATURED_GALLERY}
      />
    </div>
    <FeaturedGallery row={3} col={2} card frameHeight={600} />
    <Separator />
  </div>
);

export default GalleryDemo;
