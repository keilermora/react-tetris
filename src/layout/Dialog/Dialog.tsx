import React from 'react';
import ReactDOM from 'react-dom';
import './Dialog.css';

interface DialogProps {
  children: React.ReactNode;
}

const Dialog = ({ children }: DialogProps) => {
  const dialogRoot = React.useMemo(
    () => document.getElementById('dialog-root') as HTMLElement,
    []
  );

  const dialogElement = (
    <>
      <div className="dialog__backdrop"></div>
      <div className="dialog__overlay">{children}</div>
    </>
  );

  return ReactDOM.createPortal(dialogElement, dialogRoot);
};

export { Dialog };
