import { useSelector } from 'react-redux';
import { useAppDispatch } from './modules/redux/store';
import { dismissAll, dismissDrawer, presentDrawer } from './components/modules/drawer/DrawerAction';
import Drawer from './components/modules/drawer/components/Drawer';
import Toast from './components/modules/toast/components/Toast';
import { alert, error, show, success } from './components/modules/toast/ToastAction';
import { ToastType } from './components/modules/toast/types';
import './assets/scss/styles.scss';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import CategoryListView from './view/pages/category/container/categoryListView';
import CategoryDetailView from './view/pages/category/container/categoryDetailView';
import { useEffect } from 'react';
import { setBaseURL } from './modules/axios';
import FishPaymentDetail from './view/pages/payment/container/fishPaymentDetail';

const App = () => {
  const drawerState = useSelector((state: any) => state.drawer);
  const toastState = useSelector((state: any) => state.toast);

  // Dispatch function to dispatch actions

  const dispatch = useAppDispatch();

  // Open a new drawer item
  const handleOpenDrawer = (drawerPayload: any) => {
    dispatch(presentDrawer(drawerPayload));
  };

  // Close a specific drawer item
  const handleCloseDrawer = (drawerId: any) => {
    dispatch(dismissDrawer(drawerId));
  };

  // Close all drawers
  const handleCloseAllDrawers = () => {
    setTimeout(() => {
      dispatch(dismissAll());
    }, 250);
  };

  const openToast = () => {
    // dispatch(
    //   show({
    //     type: ToastType.ERROR,
    //     message: 'This is a toast message',
    //   }),
    // );
    dispatch(success({ message: 'This is an error toast message' }));
    // dispatch(
    //   alert({
    //     message: 'This is an alert toast message',
    //   }),
    // );
    // dispatch(error({ message: 'This is an error toast message' }));
  };

  useEffect(() => {
    setBaseURL('http://ec2-54-180-85-61.ap-northeast-2.compute.amazonaws.com:8080/');
  }, []);

  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<CategoryListView />} />

          <Route path="/:id" element={<CategoryDetailView />} />
          <Route path="/payment" element={<FishPaymentDetail />} />
        </Routes>
      </BrowserRouter>

      {drawerState.items !== undefined && (
        <div>
          <Drawer items={drawerState.items} />
        </div>
      )}
      {toastState.items !== undefined && (
        <div>
          <Toast items={toastState.items} />
        </div>
      )}
    </>
  );
};

export default App;
