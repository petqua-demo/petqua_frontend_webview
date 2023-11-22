// import _ from 'lodash';
import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';
import {
  CLEAR_DRAWERS,
  ADD_OBSERVER,
  REMOVE_OBSERVER,
  NOTIFY_OBSERVERS,
  PRESENT_DRAWER,
  DISMISS_DRAWER,
  DISMISS_ALL,
} from './DrawerAction';
import { DrawerPosition, DrawerSize, DrawerTransitionName } from './types';
import uuid from 'react-uuid';

createAction(CLEAR_DRAWERS);
createAction(ADD_OBSERVER);
createAction(REMOVE_OBSERVER);
createAction(NOTIFY_OBSERVERS);
createAction(PRESENT_DRAWER);
createAction(DISMISS_DRAWER);
createAction(DISMISS_ALL);

const initialState = {
  items: [],
  observers: [],
};

export const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    clearDrawers: (state) => {
      state.items = [];
      state.observers = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(CLEAR_DRAWERS, (state) => {
      state.items = [];
      state.observers = [];
    });
    builder.addCase(ADD_OBSERVER, (state: any, action: any) => {
      const observer = {
        id: uuid(),
        handler: action.payload.handler,
      };
      state.observers = [...state.observers, observer];
    });
    builder.addCase(REMOVE_OBSERVER, (state, action: any) => {
      state.observers = state.observers.filter((observer: any) => observer.id !== action.payload.observerId);
    });
    builder.addCase(NOTIFY_OBSERVERS, (state, action: any) => {
      state.observers.forEach((observe: any) => observe.handler(action.payload.action, action.payload.options));
    });
    builder.addCase(PRESENT_DRAWER, (state: any, action: any) => {
      const drawerItem = {
        id: action.payload.id ?? uuid(),
        ...action.payload,
        useModal: action.payload.useModal ?? true,
        useCloseButton: action.payload.useCloseButton ?? true,
        canCloseForModal: action.payload.canCloseForModal ?? true,
        position: action.payload.position ?? DrawerPosition.BOTTOM,
        size: action.payload.size ?? DrawerSize.AUTO,
        backgroundColor: action.payload.backgroundColor ?? 'white',
        noPadding: action.payload.noPadding ?? false,
        animationName: action.payload.animationName ?? DrawerTransitionName.DEFAULT,
        component: action.payload.component,
      };
      state.items = [...state.items, drawerItem];
    });
    builder.addCase(DISMISS_DRAWER, (state, action: any) => {
      const remainingItems = state.items.filter((item: any) => item.id !== action.payload.id);
      state.items = remainingItems;
    });
    builder.addCase(DISMISS_ALL, (state) => {
      state.items = [];
    });
  },
});

// const initialState = {
//   items: [],
//   observers: [],
// };

// const drawerReducer = (state = initialState, action: any) => {
//   switch (action.type) {
//     case CLEAR_DRAWERS:
//       return {
//         ...state,
//         items: [],
//         observers: [],
//       };
//     case ADD_OBSERVER:
//       const observer = {
//         id: 1,
//         handler: action.payload.handler,
//       };
//       return {
//         ...state,
//         observers: [...state.observers, observer],
//       };
//     case REMOVE_OBSERVER:
//       return {
//         ...state,
//         observers: state.observers.filter((observer: any) => observer.id !== action.payload.observerId),
//       };
//     case NOTIFY_OBSERVERS:
//       state.observers.forEach((observe: any) => observe.handler(action.payload.action, action.payload.options));
//       return state;
//     case PRESENT_DRAWER:
//       const drawerItem = {
//         id: action.payload.id ?? 1,
//         ...action.payload,
//         useModal: action.payload.useModal ?? true,
//         useCloseButton: action.payload.useCloseButton ?? true,
//         canCloseForModal: action.payload.canCloseForModal ?? true,
//         position: action.payload.position ?? DrawerPosition.BOTTOM,
//         size: action.payload.size ?? DrawerSize.AUTO,
//         backgroundColor: action.payload.backgroundColor ?? 'white',
//         noPadding: action.payload.noPadding ?? false,
//         animationName: action.payload.animationName ?? DrawerTransitionName.DEFAULT,
//         component: action.payload.component,
//       };
//       return {
//         ...state,
//         items: [...state.items, drawerItem],
//       };
//     case DISMISS_DRAWER:
//       const remainingItems = state.items.filter((item: any) => item.id !== action.payload.id);
//       return {
//         ...state,
//         items: remainingItems,
//       };
//     case DISMISS_ALL:
//       return {
//         ...state,
//         items: [],
//       };
//     default:
//       return state;
//   }
// };

// export default drawerReducer;
