import { memo, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
const Portal = ({ id, children }) => {
  const portal = useRef(document.querySelector('overlay') || document.createElement('div'));
  useEffect(() => {
    portal.current.className = 'overlay';
    document.body.appendChild(portal.current);
    return () => {
      if (portal.current.parentElement) {
        portal.current.parentElement.removeChild(portal.current);
      }
    }
  }, []);
  return createPortal(children, portal.current);
};
export default memo(Portal);