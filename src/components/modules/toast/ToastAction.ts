import { ToastType } from './types';

export const CLEAR_TOASTS = 'CLEAR_TOASTS';
export const ALERT = 'ALERT';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const SHOW = 'SHOW';
export const HIDE = 'HIDE';
export const HIDE_ALL = 'HIDE_ALL';

export function clearToasts() {
  return {
    type: CLEAR_TOASTS,
  };
}
export function show(payload: {
  type: ToastType;
  message: any;
  duration?: number;
  clear?: boolean;
  useCloseButton?: boolean;
  margin: any;
}) {
  return {
    type: payload.type,
    payload,
  };
}

export function alert(payload: { message: any }) {
  return {
    type: ALERT,
    payload,
  };
}

export function success(payload: {
  message: any;
  duration?: number;
  clear?: boolean;
  useCloseButton?: boolean;
  action?: any;
  margin?: any;
}) {
  return {
    type: SUCCESS,
    payload,
  };
}

export function error(payload: { message: any }) {
  return {
    type: ERROR,
    payload,
  };
}

export function hide(id: any) {
  return {
    type: HIDE,
    payload: { id },
  };
}

export function hideAll() {
  return {
    type: HIDE_ALL,
  };
}

export function setToastMargin(payload: any) {
  console.log('setToastMargin', payload);
  return {
    type: 'SET_TOAST_MARGIN',
    payload,
  };
}
