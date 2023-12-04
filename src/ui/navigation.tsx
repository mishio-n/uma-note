"use client";

import { css } from "@/styled-system/css";
import { center, flex } from "@/styled-system/patterns";
import { Tab } from "./tab";

export const Navigation: React.FC = () => {
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
        <nav className={center({ gap: 20 })}>
          <Tab path="posts" name="記事" />
          <Tab path="horses" name="注目馬リスト" />
        </nav>
      </div>
    </div>
  );
};
