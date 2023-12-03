"use client";

import { css } from "@/styled-system/css";
import * as Dialog from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";
import { MouseEvent as RME, ReactNode, useCallback } from "react";

type PointerDownOutsideEvent = CustomEvent<{
  originalEvent: PointerEvent;
}>;

type Props = {
  children: ReactNode;
};

export const Modal: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const routerBack = useCallback(
    (
      e:
        | RME<HTMLButtonElement, MouseEvent>
        | KeyboardEvent
        | PointerDownOutsideEvent,
    ) => {
      e.preventDefault();
      router.back();
    },
    [router],
  );

  return (
    <Dialog.Root defaultOpen>
      <Dialog.Trigger />
      <Dialog.Portal>
        <Dialog.Overlay
          className={css({
            inset: 0,
            position: "fixed",
            bg: "rgba(0, 0, 0, .5)",
          })}
        />
        <Dialog.Content
          onEscapeKeyDown={(e) => routerBack(e)}
          onPointerDownOutside={(e) => routerBack(e)}
          className={css({
            zIndex: 20,
            position: "fixed",
            smTo2xl: {
              top: "30%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            },
            smDown: {
              top: "20%",
              left: "20%",
              transform: "translate(-10%, -10%)",
            },
          })}
        >
          <div
            className={css({
              borderRadius: "md",
              position: "relative",
            })}
          >
            <Dialog.Close asChild>
              <button
                type="button"
                onClick={(e) => routerBack(e)}
                className={css({
                  zIndex: 10,
                  position: "absolute",
                  borderRadius: "medium",
                  padding: 2,
                  margin: 2,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "gray.400",
                  "&:hover": {
                    color: "gray.500",
                    backgroundColor: "rgba(107, 114, 128, .1)",
                    cursor: "pointer",
                  },
                  top: 0,
                  right: 0,
                  rounded: "md",
                })}
              >
                <svg
                  className={css({
                    width: 6,
                    height: 6,
                  })}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <title>Close</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </Dialog.Close>
            {children}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
