import { pickBy, isEmpty } from "lodash";
import { Report } from "../../components/NewReportForm/types";

const fieldsToSkip = [
  "permissions",
  "id",
  "status",
  "mealTime",
  "continuousWork",
  "experienced",
  "gotTraining",
  "customerInterference",
  "workAlone",
];

const calculateReportFilledPercentage = (
  report: Report,
  questionsLength: number
): number => {
  const filteredReport = pickBy(report, (value, key) => {
    if (fieldsToSkip.includes(key)) return false;

    if (key === "reviewersEmail") {
      return Array.isArray(value) && value.length > 0;
    }
    if (key === "answers") {
      return Array.isArray(value) && value.length > 0;
    }
    if (typeof value === "string") {
      return value.trim() !== "";
    }
    if (typeof value === "number") {
      return value !== 0;
    }

    return !isEmpty(value);
  });

  const totalFields = Object.keys(report).filter(
    (key) => !fieldsToSkip.includes(key)
  ).length;

  const totalCount = totalFields + questionsLength;

  const filledCount =
    Object.keys(filteredReport).length +
    (report.answers ? report.answers.length : 0);

  if (totalCount === 0) return 0;
  const percentage = (filledCount / totalCount) * 100;

  return parseFloat(percentage.toFixed(0));
};

export default calculateReportFilledPercentage;
