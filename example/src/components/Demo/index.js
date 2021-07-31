import React from "react";
import { Container } from "react-bootstrap";
import CategoryDemo from "./CategoryDemo";
import ContentBlockDemo from "./ContentBlockDemo";
import ElementsDemo from "./ElementsDemo";
import GalleryDemo from "./GalleryDemo";
import PostDetailsDemo from "./PostDetailsDemo";
import PostItemDemo from "./PostItemDemo";
import PostListDemo from "./PostListDemo";
import SocialPostDemo from "./SocialPostDemo";
import TableDemo from "./TableDemo";
import SectionDemo from "./SectionDemo";

const Demo = () => {
  return (
    <Container fluid="sm">
      <h1 className="text-center app-title">React Shimmer Effects</h1>
      <br />
      <ElementsDemo />
      <SectionDemo />
      <GalleryDemo />
      <TableDemo />
      <SocialPostDemo />
      <CategoryDemo />
      <PostItemDemo />
      <PostListDemo />
      <PostDetailsDemo />
      <ContentBlockDemo />
    </Container>
  );
};

export default Demo;
