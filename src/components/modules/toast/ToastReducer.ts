import { createAction, createSlice } from '@reduxjs/toolkit';
import { CLEAR_TOASTS, SHOW, HIDE, HIDE_ALL, ERROR, SUCCESS, ALERT } from './ToastAction';
import { ToastItem, ToastType } from './types';
import uuid from 'react-uuid';

createAction(CLEAR_TOASTS);
createAction(SHOW);
createAction(HIDE);
createAction(HIDE_ALL);
createAction(ERROR);
createAction(SUCCESS);
createAction(ALERT);

const initialState = {
  items: [],
  margin: {
    top: null,
    right: null,
    bottom: null,
    left: null,
  },
};

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    clearToasts: (state) => {
      state.items = [];
    },
  },

  extraReducers: (builder) => {
    builder.addCase(CLEAR_TOASTS, (state) => {
      state.items = [];
    });
    builder.addCase(SHOW, (state: any, action: any) => {
      const item: ToastItem = {
        id: action.payload.id ?? uuid(),
        type: action.payload.type,
        message: action.payload.message,
        duration: action.payload.duration ?? 3000,
        useCloseButton: action.payload.useCloseButton ?? true,
      };
      state.items = [...state.items, item];
    });
    builder.addCase(ERROR, (state: any, action: any) => {
      const item: ToastItem = {
        id: action.payload.id ?? uuid(),
        type: ToastType.ERROR,
        message: action.payload.message,
        duration: action.payload.duration ?? 3000,
        useCloseButton: action.payload.useCloseButton ?? true,
      };
      state.items = [...state.items, item];
    });
    builder.addCase(SUCCESS, (state: any, action: any) => {
      const item: ToastItem = {
        id: action.payload.id ?? uuid(),
        type: ToastType.SUCCESS,
        message: action.payload.message,
        duration: action.payload.duration ?? 3000,
        useCloseButton: action.payload.useCloseButton ?? true,
      };

      state.items = [...state.items, item];
    });
    builder.addCase(ALERT, (state: any, action: any) => {
      const item: ToastItem = {
        id: action.payload.id ?? uuid(),
        type: ToastType.ALERT,
        message: action.payload.message,
        duration: action.payload.duration ?? 3000,
        useCloseButton: action.payload.useCloseButton ?? true,
      };
      state.items = [...state.items, item];
    });
    builder.addCase(HIDE, (state, action: any) => {
      state.items = state.items.filter((item: any) => item.id !== action.payload.id);
    });
    builder.addCase(HIDE_ALL, (state) => {
      state.items = [];
    });
  },
});
