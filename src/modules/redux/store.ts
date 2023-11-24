import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { drawerSlice } from '../../components/modules/drawer/DrawerReducer';
import { toastSlice } from '../../components/modules/toast/ToastReducer';

const store = configureStore({
  reducer: {
    drawer: drawerSlice.reducer,
    toast: toastSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
