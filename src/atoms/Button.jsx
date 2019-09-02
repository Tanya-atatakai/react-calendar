// @flow
import React from 'react';

type Props = {
  text: string;
  appearance?: 'subtle' | 'primary';
  onClick(e): void;
};

export default (props: Props) => (
  <button
    className={`button button--${props.appearance}`}
    onClick={props.onClick}
  >
    {props.text}
  </button>
);
