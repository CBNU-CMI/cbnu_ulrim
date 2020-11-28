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
  marginTop?: number;
  text?: string;
  moveText?: string;
  link?: string;
  boxColor: BoxColor;
  boxSize: BoxSize;
}

const BoxWidths = ['20rem'];
const BoxHeights = ['3rem'];

const StyleBox = styled.div`
  text-align: center;
  cursor: pointer;
  border-radius: 0.7rem;
  box-shadow: 0 0.125rem 0.3125rem rgba(0, 0, 0, 0.12);
  cursor: default;
  border-color: #f0f2f3;
  color: #6a737c;
  padding: 1rem;
  margin-top: ${(props: BoxProps) => props.marginTop + 'rem'};
  width: ${(props: BoxProps) => BoxWidths[props.boxSize]};
  height: ${(props: BoxProps) => BoxHeights[props.boxSize]};

  a {
    color: #2ac1bc;
    font-weight: bold;
    cursor: pointer;
  }
`;

function Box({
  marginTop,
  text = '',
  moveText = '',
  link = '',
  boxColor = BoxColor.BASIC,
  boxSize = BoxSize.XL,
}) {
  return (
    <StyleBox marginTop={marginTop} boxColor={boxColor} boxSize={boxSize}>
      {text}
      <a href={link}>{moveText}</a>
    </StyleBox>
  );
}

export default Box;
