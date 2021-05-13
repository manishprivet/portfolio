import styled, { css } from "styled-components";

const style = css`
  width: 50%;
  margin: 10px 0;
  font-size: 1.5em;
  padding: 10px;
  background: none;
  outline: none;
  border: 1px solid white;
  color: white;

  @media only screen and (max-width: 600px) {
    width: 80%;
  }
`;

export const TextInput = styled.input`
  ${style}
`;

export const TextArea = styled.textarea`
  ${style}
`;
