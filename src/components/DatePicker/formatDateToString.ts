import { isDate, format, isValid } from "date-fns";
import { dateFormats } from "./constants";

const formatDateToString = (
  date: Date | null,
  formatType = dateFormats.complete
) => (isDate(date) && isValid(date) ? format(date, formatType) : null);

export default formatDateToString;
