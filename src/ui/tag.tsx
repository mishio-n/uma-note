import { css } from "@/styled-system/css";
import { flex } from "@/styled-system/patterns";
import { SystemStyleObject } from "@/styled-system/types";

type Props = {
  text: string;
  backgroundColor?: SystemStyleObject["backgroundColor"];
  styles?: SystemStyleObject;
};

export const Tag: React.FC<Props> = ({
  text,
  backgroundColor = "green.200",
  styles,
}) => (
  <div
    className={css({
      _before: {
        content: '""',
        height: 3,
        width: 3,
        rounded: "full",
        backgroundColor: "paper",
      },
      color: "#505050",
      padding: "0.4em",
      lineHeight: "1.5",
      borderRadius: "50px 1rem 1rem 50px",
      display: "inline-flex",
      alignItems: "center",
      minWidth: "80px",
      maxWidth: "120px",
      boxShadow: "0.3px 0.3px #52525b",
      backgroundColor,
      ...styles,
    })}
  >
    <div
      className={flex({
        marginLeft: 1.5,
      })}
    >
      <span className={css({ fontSize: "xs", whiteSpace: "nowrap" })}>
        {text}
      </span>
    </div>
  </div>
);
