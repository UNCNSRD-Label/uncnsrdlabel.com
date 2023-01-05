"use client";

// See https://souporserious.com/build-a-dialog-component-in-react/

import type { FC, MouseEvent, ReactNode } from "react";

import { useEffect, useRef } from "react";

// import { useDialogPolyfill } from "./useDialogPolyfill";

type Props = {
  children?: ReactNode;
  className?: string;
  closeOnOutsideClick: boolean;
  onRequestClose: Function;
  open: boolean;
};

export const Component: FC<Props> = ({
  //   children,
  //   className,
  closeOnOutsideClick,
  onRequestClose,
  open,
  ...props
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lastActiveElementRef = useRef<Element>(null);
  const firstRender = useRef(true);

  //   useDialogPolyfill(dialogRef);

  useEffect(() => {
    // prevents calling imperative methods on mount since the polyfill will throw an error since we are not using the `open` attribute
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      const dialogNode = dialogRef.current;
      let lastActiveNode = lastActiveElementRef.current;

      if (dialogNode) {
        if (open) {
          lastActiveNode = document.activeElement;
          dialogNode.showModal();
        } else {
          dialogNode.close();

          if (lastActiveNode instanceof HTMLElement) {
            lastActiveNode.focus();
          }
        }
      }
    }
  }, [open]);

  useEffect(() => {
    const dialogNode = dialogRef.current;

    const handleCancel = (event: Event) => {
      event.preventDefault();
      onRequestClose();
    };

    dialogNode?.addEventListener("cancel", handleCancel);

    return () => {
      dialogNode?.removeEventListener("cancel", handleCancel);
    };
  }, [onRequestClose]);

  function handleOutsideClick(event: MouseEvent) {
    const dialogNode = dialogRef.current;
    if (closeOnOutsideClick && event.target === dialogNode) {
      onRequestClose();
    }
  }

  return (
    <dialog ref={dialogRef} style={{ padding: 0 }} onClick={handleOutsideClick}>
      <div {...props} />
    </dialog>
  );
};

export default Component;
