import React from "react";
import { oneOfType, element, arrayOf, func, node } from "prop-types";

export const childrenPropTypes = {
  children: oneOfType([
    element,
    node,
    arrayOf(oneOfType([element, node, func]))
  ])
};

export const childrenDefaultProps = {
  children: <></>
};
