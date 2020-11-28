/* External dependencies */
import React from 'react';
import styled from 'styled-components';

export enum BoxColor {
  BASIC,
}

export enum BoxSize {
  XL,
}
interface BoxProps {
  margin?: number;
  text?: string;
  moveText?: string;
  link?: string;
  color?: BoxColor;
  size?: BoxSize;
}

const BoxFontColors = ['#6a737c'];
const BoxBorderColors = ['#f0f2f3'];
const BoxPadding = ['1rem'];
const BoxWidths = ['20rem'];
const BoxHeights = ['3rem'];

const StyledBox = styled.div`
  text-align: center;
  cursor: pointer;
  border-radius: 0.7rem;
  box-shadow: 0 0.125rem 0.3125rem rgba(0, 0, 0, 0.12);
  cursor: default;

  a {
    color: #2ac1bc;
    font-weight: bold;
    cursor: pointer;
  }
`;

function Box({
  margin,
  text = '',
  moveText = '',
  link = '',
  type = 'basic',
  size = 'md',
}) {
  return (
    <StyledBox boxColor={boxColor} boxSize={boxSize}>
      {text}
      <a href={link}>{moveText}</a>
    </StyledBox>
  );
}

export default Box;
