export const dateFormats = {
  default: "dd/MM/yyyy",
  complete: "MM/dd/yyyy HH:mm:ss",
};

import { DatePicker } from "antd";
import dateFnsGenerateConfig from "rc-picker/lib/generate/dateFns";

const MyDatePicker = DatePicker.generatePicker<Date>(dateFnsGenerateConfig);

export default MyDatePicker;
