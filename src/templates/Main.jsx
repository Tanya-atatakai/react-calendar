// @flow
import React from 'react';
import Header from '../organisms/Header';

type Props = {
  children: React.ReactNode;
};

export default (props: Props) => (
  <div className="main-template">
    <Header/>
    <div className="main-template__content">
      {props.children}
    </div>
  </div>
);
