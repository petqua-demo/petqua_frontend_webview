import React, { useState, useEffect, useRef } from 'react';

declare global {
  interface Window {
    daum: any;
  }
}

// Utility functions similar to the Vue version
function defer(load: any) {
  let promise: any = null;
  return () => (promise ? promise : (promise = Promise.resolve(load())));
}

function load(src: any, options = {}) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    Object.assign(script, options, {
      src,
      async: true,
      onload: resolve,
      onerror: reject,
    });
    document.head.appendChild(script);
  });
}

export function createReactDaumPostcode(
  options = {
    scriptUrl: null,
  },
) {
  const loadDaumPostcode = defer(() => {
    return load('//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js').then(
      () => new Promise((resolve) => window.daum.postcode.load(resolve)),
    );
  });

  return function ReactDaumPostcode(props: any) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [styleHeight, setStyleHeight] = useState('');
    const containerRef = useRef(null);

    // Similar to mounted and methods in Vue
    useEffect(() => {
      loadDaumPostcode().then(() => {
        setIsLoaded(true);
        // Similar to Vue's `new window.daum.Postcode({...})`
        const postcode = new window.daum.Postcode({
          width: '100%',
          height: '100%',
          animation: props.animation,
          autoMapping: !props.noAutoMapping,
          shorthand: !props.noShorthand,
          pleaseReadGuide: props.pleaseReadGuide,
          pleaseReadGuideTimer: props.pleaseReadGuideTimer,
          maxSuggestItems: props.maxSuggestItems,
          showMoreHName: props.showMoreHName,
          hideMapBtn: props.hideMapBtn,
          hideEngBtn: props.hideEngBtn,
          alwaysShowEngAddr: props.alwaysShowEngAddr,
          zonecodeOnly: props.zonecodeOnly,
          theme: props.theme,
          submitMode: !props.noSubmitMode,
          onsearch: (data: any) => props.onSearch && props.onSearch(data),
          oncomplete: (data: any) => props.onComplete && props.onComplete(data),
          onresize: (data: any) => {
            setStyleHeight(`${data.height}px`);
            props.onResize && props.onResize(data);
          },
        });

        postcode.embed(containerRef.current, {
          q: props.q,
          autoClose: false,
        });
      });
    }, []); // Similar to Vue's mounted

    return (
      <div className="react-daum-postcode" style={{ backgroundColor: '#ececec' }}>
        {isLoaded ? (
          <div className="react-daum-postcode-container" style={{ height: styleHeight }} />
        ) : (
          <div className="react-daum-postcode-loading">{props.loading}</div>
        )}
      </div>
    );
  };
}
