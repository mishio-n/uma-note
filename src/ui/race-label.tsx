import { css } from "@/styled-system/css";
import { flex } from "@/styled-system/patterns";
import { SystemStyleObject } from "@/styled-system/types";
import { EventIcon } from "@/ui/icons/event";

type Props = {
  race: string;
  date?: string;
  styles?: SystemStyleObject;
};

export const RaceLabel: React.FC<Props> = ({ race, date, styles }) => (
  <div
    className={css({
      position: "relative",
      paddingLeft: 2,
      paddingRight: 12,
      paddingBottom: 1,
      width: "fit-content",
      _before: {
        position: "absolute",
        content: '""',
        bottom: "-4px",
        right: 0,
        width: 0,
        height: 0,
        borderRight: "solid 24px transparent",
        borderBottom: "solid 12px #C8D2FF",
      },
      _after: {
        position: "absolute",
        content: '""',
        bottom: "-4px",
        right: "10px",
        left: "10px",
        borderBottom: "solid 4px #C8D2FF",
      },
      ...styles,
    })}
  >
    <div
      className={flex({
        marginLeft: "0.5em",
        alignItems: "center",
        gap: 4,
      })}
    >
      {date && (
        <div className={flex({ gap: 1, alignItems: "center" })}>
          <EventIcon />
          <span className={css({ fontSize: "sm" })}>{date}</span>
        </div>
      )}

      <span>{race}</span>
    </div>
  </div>
);
