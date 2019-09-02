// @flow
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default (props: Props) => (
  <div className="button-group">
    {props.children}
  </div>
);
