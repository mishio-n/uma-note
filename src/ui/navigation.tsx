"use client";

import { css } from "@/styled-system/css";
import { center } from "@/styled-system/patterns";
import { Tab } from "./tab";

type Props = {
  children: React.ReactNode;
};

export const Navigation: React.FC<Props> = ({ children }) => {
  return (
    <div
      className={css({
        marginBottom: "-1px",
        position: "sticky",
        top: 0,
        backgroundColor: "white",
      })}
    >
      <div
        className={css({
          marginY: -0.5,
          paddingY: 0.5,
        })}
      >
        <nav className={center({ gap: 20 })}>{children}</nav>
      </div>
    </div>
  );
};
