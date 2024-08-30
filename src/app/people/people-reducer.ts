import { createReducer, on } from '@ngrx/store';
import { add } from './people-actions';

export const initialStatePeople = {};

export const peopleReducer = createReducer(
   initialStatePeople,
   on(add, state => ({
      name: 'Walter White',
      age: '52',
      city: 'Albuquerque',
      state: 'New Mexico',
      occupation: 'Chemistry Teacher',
   })),
);