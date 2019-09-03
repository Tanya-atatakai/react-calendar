// @flow
import React, { type Node } from 'react';
// import type { Node } from 'react';
import Header from '../organisms/Header';

type Props = {
  children: Node;
};

export default (props: Props) => (
  <div className="main-template">
    <Header/>
    <div className="main-template__content">
      {props.children}
    </div>
  </div>
);
