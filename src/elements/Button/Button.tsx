/* External dependencies */
import React from 'react';
import styled from 'styled-components';

export enum ButtonColor {
  MINT,
}

export enum ButtonSize {
  SM,
  MD,
  LG,
  XL,
}

interface ButtonProps {
  buttonColor: ButtonColor;
  buttonSize: ButtonSize;
  marginTop?: string;
}

const ButtonColors = ['#2ac1bc'];
const ButtonWidths = ['5rem', '10rem', '15rem', '20rem'];
const ButtonHeights = ['0.5rem', '1rem', '2rem', '3rem'];

const StyleButton = styled.button`
  text-align: center;
  cursor: pointer;
  border-radius: 0.7rem;s
  box-shadow: 0 0.125rem 0.3125rem rgba(0, 0, 0, 0.12);
  border: none;
  background-color: ${(props: ButtonProps) => ButtonColors[props.buttonColor]};
  color: #fff;
  margin-top: ${(props: ButtonProps) => props.marginTop + 'rem'};
  width:${(props: ButtonProps) => ButtonWidths[props.buttonSize]};
  height:${(props: ButtonProps) => ButtonHeights[props.buttonSize]};
`;

function Button({
  text,
  buttonColor = ButtonColor.MINT,
  buttonSize = ButtonSize.XL,
  marginTop,
}) {
  return (
    <StyleButton
      buttonColor={buttonColor}
      buttonSize={buttonSize}
      type="submit"
      marginTop={marginTop}
    >
      {text}
    </StyleButton>
  );
}

export default Button;
