# shimmer-react

> Complete shimmer effects for React

## Install

```bash
npm install --save shimmer-react
```

## Elements

### Shimmer Button

```jsx
import React from "react";
import { Button } from "shimmer-react";

class Example extends Component {
  render() {
    return <Button size="md" />;
  }
}
```

#### Properties

| Property | Type   | Required | Default value | Description                                |
| :------- | :----- | :------- | :------------ | :----------------------------------------- |
| `size`   | string | yes      | md            | Three options available ["sm", "md", "lg"] |

---

### Shimmer Badge

```jsx
import React from "react";
import { Badge } from "shimmer-react";

class Example extends Component {
  render() {
    return <Badge width={120} />;
  }
}
```

#### Properties

| Property | Type   | Required | Default value | Description                   |
| :------- | :----- | :------- | :------------ | :---------------------------- |
| `width`  | number | no       |               | Width of the badge in px unit |

---

### Shimmer Title

```jsx
import React from "react";
import { Title } from "shimmer-react";

class Example extends Component {
  render() {
    return <Title line={2} gap={10} variant="primary" />;
  }
}
```

#### Properties

| Property    | Type   | Required | Default value | Description                                                   |
| :---------- | :----- | :------- | :------------ | :------------------------------------------------------------ |
| `line`      | number | yes      | 2             | Number of line                                                |
| `gap`       | number | yes      | 10            | Gap between of lines. Four options available [10, 15, 20, 30] |
| `variant`   | string | yes      | primary       | Tow options available ["primary", "secondary"]                |
| `className` | string | no       |               | Additonal style classes                                       |

---

### Shimmer Text

```jsx
import React from "react";
import { Text } from "shimmer-react";

class Example extends Component {
  render() {
    return <Text line={5} gap={10} />;
  }
}
```

#### Properties

| Property    | Type   | Required | Default value | Description                                                   |
| :---------- | :----- | :------- | :------------ | :------------------------------------------------------------ |
| `line`      | number | yes      | 5             | Number of line                                                |
| `gap`       | number | yes      | 10            | Gap between of lines. Four options available [10, 15, 20, 30] |
| `className` | string | no       |               | Additonal style classes                                       |

---

### Circular Image

```jsx
import React from "react";
import { CircularImage } from "shimmer-react";

class Example extends Component {
  render() {
    return <CircularImage size={150} />;
  }
}
```

#### Properties

| Property    | Type   | Required | Default value | Description             |
| :---------- | :----- | :------- | :------------ | :---------------------- |
| `size`      | number | no       | 80            | Size of Image           |
| `center`    | bool   | no       | false         | Center alignment        |
| `className` | string | no       |               | Additonal style classes |

---

### Thumbnail Image

```jsx
import React from "react";
import { Thumbnail } from "shimmer-react";

class Example extends Component {
  render() {
    return <Thumbnail height={250} rounded />;
  }
}
```

#### Properties

| Property     | Type   | Required | Default value | Description                                                |
| :----------- | :----- | :------- | :------------ | :--------------------------------------------------------- |
| `width`      | number | no       |               | Width of Thumbnail. By default 100% width                  |
| `height`     | number | yes      | 250           | Height of Thumbnail.                                       |
| `center`     | bool   | no       | false         | Center alignment                                           |
| `className`  | string | no       |               | Additonal style classes                                    |
| `rounded`    | bool   | no       | false         | Border radius option enable/disable                        |
| `fitOnFrame` | bool   | no       | false         | Adjust height of parent. Will block 100% of parent element |

---

## Gallery

### Simple Gallery

```jsx
import React from "react";
import { SimpleGallery } from "shimmer-react";

class Example extends Component {
  render() {
    return (
      <>
        <SimpleGallery imageType="circular" imageHeight={200} caption />
        <SimpleGallery card imageHeight={300} />
        <SimpleGallery card imageHeight={300} caption />
      </>
    );
  }
}
```

#### Properties

| Property      | Type   | Required | Default value | Description                                                  |
| :------------ | :----- | :------- | :------------ | :----------------------------------------------------------- |
| `card`        | bool   | no       | false         | Card Style enable/disable                                    |
| `row`         | number | yes      | 3             | Number of row in your gallery                                |
| `col`         | number | yes      | 3             | Number of column in a row. Three options available [2, 3, 4] |
| `gap`         | number | yes      | 20            | Gap between columns. Two options only [20, 30]               |
| `imageType`   | string | yes      | thumbnail     | Image Style. Two options only ["thumbnail", "circular"]      |
| `imageHeight` | number |          |               | Image Height                                                 |
| `caption`     | bool   | no       | false         | Image Caption                                                |
| `fitOnFrame`  | bool   | no       | false         | Adjust height of parent. Will block 100% of parent element   |

---

### Featured Gallery

```jsx
import React from "react";
import { FeaturedGallery } from "shimmer-react";

class Example extends Component {
  render() {
    return <FeaturedGallery row={2} col={2} card frameHeight={600} />;
  }
}
```

#### Properties

| Property      | Type   | Required | Default value | Description                                                  |
| :------------ | :----- | :------- | :------------ | :----------------------------------------------------------- |
| `card`        | bool   | no       | false         | Card Style enable/disable                                    |
| `row`         | number | yes      | 2             | Number of row in your gallery                                |
| `col`         | number | yes      | 2             | Number of column in a row. Three options available [2, 3, 4] |
| `gap`         | number | yes      | 20            | Gap between columns. Two options only [20, 30]               |
| `frameHeight` | number | yes      | 600           | Height of full frame                                         |

---

## License

MIT © [Shafikul Islam](https://github.com/shafikulz)
