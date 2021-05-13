import styled from "styled-components";
import { AnchorHTMLAttributes, ComponentProps } from "react";

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

export const Link = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <Anchor rel='noopener noreferrer' {...props} />
);

export const LinkToNewTab = (props: ComponentProps<typeof Link>) => (
  <Link target='_blank' {...props} />
);
