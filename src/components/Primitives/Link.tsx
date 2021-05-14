import styled from "styled-components";
import { AnchorHTMLAttributes } from "react";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  withIcon?: boolean;
}

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

export const Link = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <Anchor rel='noopener noreferrer' {...props} />
);

export const LinkToNewTab = (props: Props) => (
  <Link target='_blank' {...props}>
    {props.children}{" "}
    {props.withIcon && (
      <FaExternalLinkSquareAlt style={{ height: "15px", width: "15px" }} />
    )}
  </Link>
);
