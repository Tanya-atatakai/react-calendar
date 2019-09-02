// @flow
import React from 'react';
import SearchField from '../molecules/SearchField';
import ButtonGroup from '../atoms/ButtonGroup';
import Button from '../atoms/Button';

export default () => (
  <header className="header">
    <div className="header__content">
      <SearchField/>
      <ButtonGroup>
        <Button text="Добавить событие" appearance="primary"/>
      </ButtonGroup>
    </div>
  </header>
);
