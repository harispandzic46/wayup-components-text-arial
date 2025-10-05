# WayUp Text Component (Arial)

A React text component for WayUp applications using Arial fonts instead of Proxima Nova.

## Installation

```bash
npm install @harispandzic46/wayup-components-text-arial
```

## Usage

```jsx
import { Text } from "@harispandzic46/wayup-components-text-arial";

<Text size="md" color="grayBlack" bold>
  Hello World
</Text>;
```

## Props

- `children`: ReactNode - The text content
- `size`: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' - Font size
- `color`: string - Text color (supports predefined colors like 'grayBlack', 'white', etc.)
- `bold`: boolean - Make text bold
- `fontStyle`: 'normal' | 'italic' - Font style
- `element`: 'div' | 'span' | 'p' - HTML element to render
- `textAlign`: 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit' - Text alignment
- `lineHeight`: string - Line height
- `textDecoration`: string - Text decoration
- `hoverTextDecoration`: string - Text decoration on hover
- `cursor`: 'text' | 'pointer' | null - Cursor style
- `backgroundColor`: string - Background color
- `padding`: string - Padding
- `margin`: string - Margin
- `textTransform`: string - Text transform
- `whiteSpace`: 'normal' | 'nowrap' | 'pre' | 'pre-line' | 'pre-wrap' | 'initial' | 'inherit' | null - White space handling
- `textOverflow`: 'clip' | 'hidden' | 'ellipsis' - Text overflow handling
- `overflow`: 'auto' | 'hidden' | 'scroll' | 'inherit' - Overflow handling
- `flexBasis`: 'auto' | string - Flex basis
- `fullWidth`: boolean - Full width
- `overflowWrap`: 'normal' | 'break-word' | 'anywhere' - Overflow wrap
- `verticalAlign`: 'baseline' | 'sub' | 'super' | 'text-top' | 'text-bottom' | 'middle' | 'top' | 'bottom' - Vertical alignment
- `display`: string - Display property
- `letterSpacing`: string - Letter spacing

## Development

```bash
npm install
npm run build
```

## License

MIT
