import { css } from "@/styled-system/css";
import { center, flex } from "@/styled-system/patterns";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header
      className={css({
        backgroundColor: "#f7fafc",
        py: 4,
        pl: 4,
      })}
    >
      <Link
        href={"/"}
        className={css({
          cursor: "pointer",
          textTransform: "none",
          gap: 8,
        })}
      >
        <span
          className={css({
            fontSize: "xl",
            fontWeight: "bold",
            color: "rgb(0,0,30)",
          })}
        >
          うまノート
        </span>
      </Link>
    </header>
  );
};
