// @flow
import React, { useRef } from 'react';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

type Props = {
  placeholder: string;
};

export default (props: Props) => {
  const timerRef = useRef();
  const handleChange = (e) => {
    clearTimeout(timerRef.current);
    const value = e.target.value;
    timerRef.current = setTimeout(
      () => history.push({ search: `?${value}` }),
      500,
    );
  }
  return (
    <input
      className="search-field"
      onChange={handleChange}
      placeholder={props.placeholder}
    />
  );
}
