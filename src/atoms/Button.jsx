// @flow
import React from 'react';

type Props = {
  text: string;
  appearance?: 'subtle' | 'primary';
  onClick(): void;
};

export default (props: Props) => (
  <button
    className={`button button--${props.appearance || 'default'}`}
    onClick={props.onClick}
  >
    {props.text}
  </button>
);
