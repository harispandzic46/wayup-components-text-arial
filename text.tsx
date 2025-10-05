import React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';

// Color constants
const brandDanger = () => '#dc3545';
const brandFacebook = '#1877f2';
const brandPrimary2 = () => '#007bff';
const gray1 = '#6c757d';
const gray2 = '#868e96';
const grayBlack = '#212529';
const white = '#ffffff';

// Font constants
const bold = '700';
const fontFamilyProximaNova = 'Arial, sans-serif';
const fontSizeBase = '16px';
const fontSizeLarge = '18px';
const fontSizeLarger = '20px';
const fontSizeMedium = '18px';
const fontSizeSmall = '14px';
const fontSizeSmaller = '12px';
const fontSizeSmallest = '10px';
const italic = 'italic';
const normal = '400';

export type TextFontSize =
  | 'xxs' // 10px
  | 'xs' // 12px
  | 'sm' // 14px
  | 'md' // 16px
  | 'lg' // 18px
  | 'xl' // 20px
  | 'xxl'; // 34px

type Props = {
  children: ReactNode;
  letterSpacing?: string;
  size?: TextFontSize;
  color?: string;
  bold?: boolean;
  lineHeight?: string;
  fontStyle?: 'normal' | 'italic';
  element?: 'div' | 'span' | 'p';
  textAlign?: 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit';
  verticalAlign?:
    | 'baseline'
    | 'sub'
    | 'super'
    | 'text-top'
    | 'text-bottom'
    | 'middle'
    | 'top'
    | 'bottom';
  display?: string;
  textDecoration?: string;
  hoverTextDecoration?: string;
  cursor?: null | 'text' | 'pointer';
  backgroundColor?: string;
  padding?: string;
  margin?: string;
  textTransform?: string;
  whiteSpace?:
    | null
    | ''
    | 'normal'
    | 'nowrap'
    | 'pre'
    | 'pre-line'
    | 'pre-wrap'
    | 'initial'
    | 'inherit';
  textOverflow?: 'clip' | 'hidden' | 'ellipsis';
  overflow?: 'auto' | 'hidden' | 'scroll' | 'inherit';
  flexBasis?: 'auto' | string; // e.g. 100%, 100px etc
  fullWidth?: boolean;
  overflowWrap?: 'normal' | 'break-word' | 'anywhere';
};

const defaultProps: Props = {
  size: 'md',
  color: grayBlack,
  bold: false,
  lineHeight: '',
  textAlign: undefined,
  textTransform: '',
  display: '',
  fontStyle: 'normal',
  element: 'div',
  textDecoration: 'none',
  hoverTextDecoration: '',
  cursor: null,
  padding: '',
  margin: '',
  backgroundColor: '',
  whiteSpace: null,
  textOverflow: 'clip',
  overflow: 'auto',
  flexBasis: '',
  letterSpacing: 'normal',
  fullWidth: false,
  children: undefined,
  verticalAlign: undefined,
  overflowWrap: undefined,
};

export const getFontSize = (size: string) => {
  switch (size) {
    case 'xxs':
      return fontSizeSmallest;
    case 'xs':
      return fontSizeSmaller;
    case 'sm':
      return fontSizeSmall;
    case 'lg':
      return fontSizeMedium;
    case 'xl':
      return fontSizeLarge;
    case 'xxl':
      return fontSizeLarger;
    case 'md':
    default:
      return fontSizeBase;
  }
};

const StyledText = styled.div`
  /* common styles (only overwritten by other base styles) */
  font-family: ${fontFamilyProximaNova};

  /* overwritable defaults (can be overwritten by props) */
  color: ${({ color }: Props) => {
    if (color === 'white') {
      return white;
    }

    if (color === 'gray2') {
      return gray2;
    }

    if (color === 'gray1') {
      return gray1;
    }

    if (color === 'grayBlack') {
      return grayBlack;
    }

    if (color === 'brandPrimary2') {
      return brandPrimary2();
    }

    if (color === 'facebook') {
      return brandFacebook;
    }

    if (color === 'red') {
      return brandDanger();
    }

    return color;
  }};

  font-style: ${({ fontStyle }: Props) => (fontStyle === 'italic' ? italic : 'normal')};
  font-weight: ${({ bold: bold1 }: Props) => (bold1 ? bold : normal)};
  line-height: ${({ lineHeight }: Props) => lineHeight && `${lineHeight}`};
  letter-spacing: ${({ letterSpacing }: Props) => letterSpacing};

  ${({ textDecoration }: Props) => textDecoration && `text-decoration: ${textDecoration};`}
  ${({ textAlign }: Props) => textAlign && `text-align: ${textAlign};`}
  ${({ verticalAlign }: Props) => verticalAlign && `vertical-align: ${verticalAlign};`}
  ${({ textTransform }: Props) => (textTransform ? `text-transform: ${textTransform};` : '')}
  ${({ display }: Props) => display && `display: ${display};`}
  ${({ cursor }: Props) => cursor && `cursor: ${cursor};`}
  ${({ backgroundColor }: Props) => backgroundColor && `background-color: ${backgroundColor};`}
  ${({ padding }: Props) => padding && `padding: ${padding};`}
  ${({ margin }: Props) => margin && `margin: ${margin};`}
  ${({ textOverflow }: Props) => textOverflow && `text-overflow: ${textOverflow};`}
  ${({ overflow }: Props) => overflow && `overflow: ${overflow};`}
  ${({ flexBasis }: Props) => flexBasis && `flex-basis: ${flexBasis};`}
  ${({ size }: Props) => size && `font-size: ${getFontSize(size)};`}
  ${({ whiteSpace }: Props) => whiteSpace && `white-space: ${whiteSpace};`}
  ${({ fullWidth }: Props) => (fullWidth ? 'width: 100%;' : '')}
  ${({ overflowWrap }: Props) => overflowWrap && `overflow-wrap: ${overflowWrap};`}

  ${({ hoverTextDecoration }: Props) =>
    hoverTextDecoration &&
    `
    :hover {
      text-decoration: ${hoverTextDecoration};
    }
  `}
`;
StyledText.displayName = 'Text';

// This allows you to choose the semantically correct heading level
// while still allowing you to pass the 'size' prop to control sizing
// Example: <Text element="p"> will be an Text element but rendered as a <p/>
const wrappers = {
  div: StyledText,
  p: StyledText.withComponent('p'),
  span: StyledText.withComponent('span'),
};

const TextComponent = (props: Props) => {
  const Dummy = wrappers[props.element || 'div'];
  return <Dummy {...props}>{props.children}</Dummy>;
};
TextComponent.displayName = 'TextComponent';
TextComponent.defaultProps = defaultProps;

export const Text = TextComponent;
