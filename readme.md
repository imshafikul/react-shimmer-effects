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
    return <Button />;
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
    return <Badge />;
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
    return <Title />;
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
    return <Text />;
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
    return <CircularImage />;
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
    return <Thumbnail />;
  }
}
```

#### Properties

| Property     | Type   | Required | Default value | Description                                                |
| :----------- | :----- | :------- | :------------ | :--------------------------------------------------------- |
| `width`      | number | no       |               | Width of Thumbnail. By default 100% width                  |
| `height`     | number | no       | 250           | Height of Thumbnail.                                       |
| `center`     | bool   | no       | false         | Center alignment                                           |
| `className`  | string | no       |               | Additonal style classes                                    |
| `rounded`    | bool   | no       | false         | Border radius option enable/disable                        |
| `fitOnFrame` | bool   | no       | false         | Adjust height of parent. Will block 100% of parent element |

---

## License

MIT © [Shafikul Islam](https://github.com/shafikulz)
