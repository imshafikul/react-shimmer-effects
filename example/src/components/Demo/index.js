import React from "react";
import CategoryDemo from "./CategoryDemo";
import ContentBlockDemo from "./ContentBlockDemo";
import ElementsDemo from "./ElementsDemo";
import GalleryDemo from "./GalleryDemo";
import PostDetailsDemo from "./PostDetailsDemo";
import PostItemDemo from "./PostItemDemo";
import PostListDemo from "./PostListDemo";
import SocialPostDemo from "./SocialPostDemo";
import TableDemo from "./TableDemo";

const Demo = () => {
  return (
    <div>
      <ElementsDemo />
      <GalleryDemo />
      <TableDemo />
      <SocialPostDemo />
      <CategoryDemo />
      <PostItemDemo />
      <PostListDemo />
      <PostDetailsDemo />
      <ContentBlockDemo />
    </div>
  );
};

export default Demo;
