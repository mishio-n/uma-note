import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDate = (date: string, format: "M/D" | "YYYY/MM/DD") => {
  const formattedDate = dayjs.utc(date).tz("Asia/Tokyo").format(format);
  return formattedDate;
};
