import React, { useState, useEffect, useMemo } from 'react';
import DrawerItem from './DrawerItem'; // Assumes that you have a corresponding DrawerItem in React
import './Drawer.scss';

const Drawer = ({ observerHandler, items }: any) => {
  // This would ideally come from some React context or global state

  const [isClose, setIsClose] = useState(false);

  const useModal = useMemo(() => {
    setIsClose(false);
    const modalItems = items.filter((item: any) => item.useModal !== false);
    return modalItems.length > 0;
  }, [items]);

  function closeDrawer() {
    setIsClose(true);
    // Equivalent logic to drawerModule.dismissAll() goes here
  }

  return (
    <>
      <div className="drawer-container">
        {items.length !== 0 && <div onClick={closeDrawer} className="drawer-bg"></div>}
        <ul>
          {items.map((item: any) => (
            <DrawerItem key={item.id} payload={{ ...item, isClose }} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Drawer;
