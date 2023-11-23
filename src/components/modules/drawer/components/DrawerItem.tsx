import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Drawer.scss';
import { DrawerPosition, DrawerSize } from '../types';

const DrawerItem = ({ payload }: any) => {
  const [mounted, setMounted] = useState(false);
  const background = useRef(null);

  const styles = { backgroundColor: payload?.backgroundColor };

  useEffect(() => {
    if (payload.isClose) {
      closeDrawer();
    }
  }, [payload.isClose]);

  useEffect(() => {
    (async () => {
      await openDrawer();
    })();
  }, []);

  async function openDrawer() {
    await Promise.resolve();
    setMounted(true);
  }

  async function closeDrawer() {
    setMounted(false);
    setTimeout(() => {
      payload.event?.onClose();
    }, 250);

    // TODO: Add the equivalent dismiss logic
  }

  function onMouseDown(e: any) {
    if (payload?.canCloseForModal && e.target === background.current && e.which === 1) {
      closeDrawer();
    }
  }

  function getClassNames() {
    const classes: any = {};

    if (payload?.noPadding) {
      classes['no-padding'] = true;
    }

    if (payload?.position === DrawerPosition.BOTTOM) {
      classes['position-bottom'] = true;
    } else if (payload?.position === DrawerPosition.CENTER) {
      classes['position-center'] = true;
    } else if (payload?.position === DrawerPosition.TOP) {
      classes['position-top'] = true;
    } else if (payload?.position === DrawerPosition.BOTTOM_NO_PADDING) {
      classes['position-bottom-no-padding'] = true;
    }

    if (payload?.size === DrawerSize.FULL) {
      classes['full'] = true;
    }

    if (payload?.useModal === true) {
      classes['modal'] = true;
    }
    const setClass = Object.keys(classes)
      .map((key) => classes[key] && key)
      .join(' ');
    return setClass;
  }

  function getTransitionName() {
    if (payload?.position === DrawerPosition.CENTER) {
      if (mounted) {
        if (payload?.transitionName === 'up') {
          return 'up-center';
        } else if (payload?.transitionName === 'down') {
          return 'down-center-in';
        }
        return 'fadeIn-center';
      }
      if (payload?.transitionName === 'up') {
        return 'down-center';
      } else if (payload?.transitionName === 'down') {
        return 'down-center-out';
      }
      return 'fadeOut-center';
    }
    if (payload?.position === DrawerPosition.TOP) {
      if (mounted) {
        return 'down-top';
      }
      return 'up-top';
    }
    if (mounted) {
      return 'up';
    }
    return 'down';
  }

  return (
    <TransitionGroup className="transition-group">
      <CSSTransition in={mounted} timeout={250} classNames={getTransitionName()}>
        <li
          className={`${getTransitionName()} ${getClassNames()} drawer-item`}
          ref={background}
          onMouseDown={onMouseDown}
          onTouchStart={onMouseDown}
        >
          <div className="container" style={styles} onClick={(e) => e.stopPropagation()}>
            {/* Dynamic component rendering... */}
            {/* <MainContainer /> */}
            <payload.component payload={payload} close={closeDrawer} />
            {payload.useCloseButton && (
              <div className="drawer-backward-header">
                <div className="drawer-backward-header__container">
                  <button className="drawer-backward-header__button">
                    <p onClick={closeDrawer}>닫기</p>
                  </button>
                </div>
              </div>
            )}
          </div>
        </li>
      </CSSTransition>
    </TransitionGroup>
  );
};

DrawerItem.propTypes = {
  payload: PropTypes.object.isRequired,
};

export default DrawerItem;
