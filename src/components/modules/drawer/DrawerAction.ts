// action types
export const CLEAR_DRAWERS = 'CLEAR_DRAWERS';
export const ADD_OBSERVER = 'ADD_OBSERVER';
export const REMOVE_OBSERVER = 'REMOVE_OBSERVER';
export const NOTIFY_OBSERVERS = 'NOTIFY_OBSERVERS';
export const PRESENT_DRAWER = 'PRESENT_DRAWER';
export const DISMISS_DRAWER = 'DISMISS_DRAWER';
export const DISMISS_ALL = 'DISMISS_ALL';

// action creators
export function clearDrawers() {
  return {
    type: CLEAR_DRAWERS,
  };
}

export function addObserver(handler: any) {
  return {
    type: ADD_OBSERVER,
    payload: { handler },
  };
}

export function removeObserver(observerId: any) {
  return {
    type: REMOVE_OBSERVER,
    payload: { observerId },
  };
}

export function notifyObservers(action: any, options: any) {
  return {
    type: NOTIFY_OBSERVERS,
    payload: { action, options },
  };
}

export function presentDrawer(payload: any) {
  return {
    type: PRESENT_DRAWER,
    payload,
  };
}

export function dismissDrawer(id: any) {
  return {
    type: DISMISS_DRAWER,
    payload: { id },
  };
}

export function dismissAll() {
  return {
    type: DISMISS_ALL,
  };
}

// ... Add action creators for NOTIFY_OBSERVERS, PRESENT_DRAWER, and DISMISS_DRAWER similarly

// reducer
