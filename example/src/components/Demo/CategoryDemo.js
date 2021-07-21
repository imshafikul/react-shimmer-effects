import React from "react";
import { Card, Separator, CategoryItem, CategoryList } from "shimmer-react";
import CodePreview from "../CodePreview";
import { code } from "../../configs";

const CategoryDemo = () => (
  <div>
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
  </div>
);

export default CategoryDemo;
