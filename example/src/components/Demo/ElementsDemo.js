import React from "react";
import {
  Button,
  CircularImage,
  Thumbnail,
  Badge,
  Text,
  Title,
  Separator,
} from "shimmer-react";
import CodePreview from "../CodePreview";
import { code } from "../../configs";

const ElementsDemo = () => (
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
  </div>
);

export default ElementsDemo;
