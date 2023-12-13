import { center } from "@/styled-system/patterns";

type Props = {
  text: string;
};

export const SimpleTag: React.FC<Props> = ({ text }) => (
  <span
    className={center({
      backgroundColor: "gray.500",
      fontSize: "xs",
      color: "#f9fafb",
      fontWeight: "semibold",
      paddingY: 1,
      paddingX: 3,
      rounded: "full",
    })}
  >
    {text}
  </span>
);
