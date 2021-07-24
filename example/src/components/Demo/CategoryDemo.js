import React from "react";
import {
  ShimmerCard,
  ShimmerSeparator,
  ShimmerCategoryItem,
  ShimmerCategoryList,
} from "shimmer-react";
import CodePreview from "../CodePreview";
import { code } from "../../configs";

const CategoryDemo = () => (
  <div>
    <h3>Category Item & List</h3>
    <div className="shimmer-row">
      <div className="shimmer-col">
        <div className="d-flex justify-content-between">
          Category Items{" "}
          <CodePreview title="Category Items" code={code.CATEGORY_ITEMS} />
        </div>
        <ShimmerCard paddingSize={30}>
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
        </ShimmerCard>
      </div>
      <div className="shimmer-col">
        <div className="d-flex justify-content-between">
          Category List{" "}
          <CodePreview title="Category List" code={code.CATEGORY_LISTS} />
        </div>
        <ShimmerCategoryList title items={6} categoryStyle="STYLE_SEVEN" />
      </div>
    </div>
    <ShimmerSeparator />
  </div>
);

export default CategoryDemo;
