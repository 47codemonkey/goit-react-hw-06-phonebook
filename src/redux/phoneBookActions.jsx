import { createAction } from '@reduxjs/toolkit';

export const saveContact = createAction('SAVE_CONTACT');
export const deleteContact = createAction('DELETE_CONTACT');
export const updateFilter = createAction('UPDATE_FILTER');
