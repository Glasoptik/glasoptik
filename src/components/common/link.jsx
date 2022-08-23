import React from "react";
import { Link as GatsbyLink } from "gatsby";
import slugify from "slugify";
import isExternalLink from "../helper/isExternalLink";

export default function Link({ to, children, ...props }) {
  return isExternalLink(to) ||
    !to ||
    to.includes("mailto:") ||
    to.includes("tel:") ? (
    <a href={to} target="_blank" rel="noreferrer" {...props}>
      {children}
    </a>
  ) : (
    <GatsbyLink to={to} {...props}>
      {children}
    </GatsbyLink>
  );
}

export function url(prefix, str) {
  let result = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  result = slugify(result, {
    lower: true,
  });
  return `/${prefix}-${result}`;
}
