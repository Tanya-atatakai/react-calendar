// @flow
import React, { useState, useCallback } from 'react';
import SearchField from '../molecules/SearchField';
import ButtonGroup from '../atoms/ButtonGroup';
import Button from '../atoms/Button';
import EventForm from './EventForm';
import Overlay from '../atoms/Overlay';

export default () => {
  const [isOpen, setOpen] = useState(false);
  const handleOpenClick = useCallback(() => setOpen(true), []);
  const handleCloseClick = useCallback(() => setOpen(false), []);
  return (
    <header className="header">
      <div className="header__content">
        <SearchField placeholder="Искать событие..." />
        <ButtonGroup>
          <Button text="Добавить" appearance="primary" onClick={handleOpenClick} />
        </ButtonGroup>
        {isOpen ? (
          <Overlay id="overlay">
            <EventForm onClose={handleCloseClick} />
          </Overlay>
        ) : null}
      </div>
    </header>
  );
}
