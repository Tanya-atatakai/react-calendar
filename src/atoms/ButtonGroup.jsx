// @flow
import React, { type Node } from 'react';

type Props = {
  children: Node;
};

export default (props: Props) => (
  <div className="button-group">
    {props.children}
  </div>
);
