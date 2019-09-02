// @flow
import React, { useState, useMemo } from 'react';
import MainTemplate from '../templates/Main';
import Calendar from '../organisms/Calendar';

export default () => {
  return (
    <MainTemplate>
      <Calendar/>
    </MainTemplate>
  );
}
