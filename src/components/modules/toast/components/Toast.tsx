import React, { useState, useEffect } from 'react';
import ToastItem from './ToastItem';

const ToastContainer = ({ items }: any) => {
  const [isClose, setIsClose] = useState(false);

  return (
    <div className="toast-container">
      <ul>
        {items.map((item: any) => (
          <ToastItem key={item.id} payload={{ ...item, isClose }} />
        ))}
      </ul>
    </div>
  );
};

export default ToastContainer;
