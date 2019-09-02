// @flow
import React from 'react';

type Props = {
  placeholder: string;
};

export default (props: Props) => (
  <input
    className="search-field"
    placeholder={props.placeholder}
  />
);
