import instance from "dayjs";
import isLeapYear from "dayjs/plugin/isLeapYear";
import localeData from "dayjs/plugin/localeData";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import weekday from "dayjs/plugin/weekday";
import isoWeek from "dayjs/plugin/isoWeek";
import customParseFormat from "dayjs/plugin/customParseFormat";

instance.extend(localeData);
instance.extend(isLeapYear);
instance.extend(utc);
instance.extend(timezone);
instance.extend(weekday);
instance.extend(isoWeek);
instance.extend(customParseFormat);

instance.tz.setDefault("Etc/UCT");

export const dayjs = instance;
