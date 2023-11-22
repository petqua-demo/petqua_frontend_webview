import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useDispatch } from 'react-redux';
import './Toast.scss';
import { hideAll } from '../ToastAction';

const ToastItem = ({ payload }: any) => {
  const { type, message, margin, duration = 3500, useCloseButton } = payload;
  const [mounted, setMounted] = useState(false);

  const dispatch = useDispatch();

  const itemPosition = {
    bottom: margin?.bottom ? `${margin.bottom}px` : null,
    top: margin?.top ? `${margin.top}px` : null,
    left: margin?.left ? `${margin.left}px` : null,
    right: margin?.right ? `${margin.right}px` : null,
  };

  useEffect(() => {
    (async () => {
      await openToast();
      setTimeout(() => {
        closeToast();
      }, duration);
    })();
  }, [duration]);

  async function openToast() {
    await Promise.resolve();
    setMounted(true);
  }

  function closeToast() {
    setMounted(false);
    setTimeout(() => {
      dispatch(hideAll());
    }, 250);
  }

  function getTransitionName() {
    if (mounted) {
      return 'fadeIn';
    }
    return 'fadeOut';
  }

  return (
    <li className={`toast-item ${type} ${getTransitionName()}`}>
      <div className="toast-item-container">
        {/* For simplicity, I'm using a placeholder icon instead of SVG */}
        <p className="toast-body">{message}</p>
        {useCloseButton && (
          <button
            onClick={() => {
              closeToast();
              // Call hide toast function here
              // e.g., toastModule.hide(props.data);
            }}
          >
            닫기
          </button>
        )}
      </div>
    </li>
  );
};

export default ToastItem;
