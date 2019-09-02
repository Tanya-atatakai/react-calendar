import React from 'react';
import SearchField from '../molecules/SearchField';
import ButtonGroup from '../atoms/ButtonGroup';
import Button from '../atoms/Button';

interface Props {
  onClose(): void;
}

export default (props: Props) => (
  <form className="event-form">
    <h1 className="event-form__title">Новое событие</h1>
    <div className="event-form__content">
      Контент формы
    </div>
    <ButtonGroup>
      <Button text="Отмена" onClick={props.onClose}/>
      <Button text="Сохранить"/>
    </ButtonGroup>
  </form>
)
