import { useSelector } from 'react-redux';
import { useAppDispatch } from './modules/redux/store';
import { dismissAll, dismissDrawer, presentDrawer } from './components/modules/drawer/DrawerAction';
import Drawer from './components/modules/drawer/components/Drawer';
import Toast from './components/modules/toast/components/Toast';
import { alert, error, show } from './components/modules/toast/ToastAction';
import { ToastType } from './components/modules/toast/types';

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
    dispatch(error({ message: 'This is an error toast message' }));
    // dispatch(
    //   alert({
    //     message: 'This is an alert toast message',
    //   }),
    // );
    // dispatch(error({ message: 'This is an error toast message' }));
  };

  return (
    <div className="App">
      <h1 onClick={openToast}>React App</h1>

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
    </div>
  );
};

export default App;
