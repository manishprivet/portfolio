import styled, { css } from "styled-components";

const style = css`
  border: none;
`;

export const CircularImage = styled.img`
  ${style}
  border-radius: 50%;
  box-shadow: 2px 2px 10px black;
`;

export const RoundedImage = styled.img`
  ${style}
  border-radius: 10px;
`;
