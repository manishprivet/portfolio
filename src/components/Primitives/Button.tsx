import styled, { css } from "styled-components";

const style = css`
  padding: 15px 50px;
  margin: 10px;
  border: solid 2px var(--button-color);
  background: none;
  border-radius: 30px;
  cursor: pointer;
  color: #fff;
`;

export const Button = styled.button`
  ${style}

  &:hover {
    background-color: var(--button-color);
    color: black;
  }
`;

export const ButtonAlternate = styled.button`
  ${style}

  background-color: var(--button-color);
  color: #000;

  &:hover {
    background-color: transparent;
    color: white;
  }
`;
