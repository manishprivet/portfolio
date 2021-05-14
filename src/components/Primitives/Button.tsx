import styled, { css } from "styled-components";

const style = css`
  padding: 15px 50px;
  margin: 10px;
  border: solid 2px var(--button-color);
  background: none;
  border-radius: 30px;
  cursor: pointer;
  color: var(--text-color);
`;

export const Button = styled.button`
  ${style}

  &:hover {
    background-color: var(--button-color);
    color: var(--button-text-color);
  }
`;

export const ButtonAlternate = styled.button`
  ${style}

  background-color: var(--button-color);
  color: var(--button-text-color);

  &:hover {
    background-color: transparent;
    color: var(--text-color);
  }
`;
