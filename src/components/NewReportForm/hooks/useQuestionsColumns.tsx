import { Radio, Typography } from "antd";
import type { TableProps } from "antd";
import { QuestionType, Report, Answer, AnswerStatus } from "../types";
import { useTranslation } from "react-i18next";

const { Text } = Typography;

const useQuestionsColumns = (
  values: Report,
  setFieldValue: (field: string, value: unknown) => void
): TableProps<QuestionType>["columns"] => {
  const { t } = useTranslation();

  const handleSelect = (id: number, value: string) => {
    const existingAnswerIndex = values.answers.findIndex(
      (answer) => answer.questionNumber === id
    );

    const updatedAnswer: Answer = {
      id:
        existingAnswerIndex !== -1 ? values.answers[existingAnswerIndex].id : 0,
      questionNumber: id,
      reportId: values.id,
      answer: value,
      updateNumber: 1,
    };

    const updatedAnswers =
      existingAnswerIndex !== -1
        ? values.answers.map((answer, index) =>
            index === existingAnswerIndex ? updatedAnswer : answer
          )
        : [...values.answers, updatedAnswer];

    setFieldValue("answers", updatedAnswers);
  };

  //TODO translate titles

  return [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text) => <Text>{text}</Text>,
      width: 40,
      align: "center",
      responsive: ["md"],
    },
    {
      title: t("Question"),
      dataIndex: "question",
      key: "question",
      render: (text) => <Text>{text}</Text>,
    },
    {
      title: t(AnswerStatus.AGREE),
      key: AnswerStatus.AGREE,
      render: (_, record) => (
        <Radio
          checked={
            values.answers.find((answer) => answer.questionNumber === record.id)
              ?.answer === AnswerStatus.AGREE
          }
          onChange={() => handleSelect(record.id, AnswerStatus.AGREE)}
        />
      ),
      align: "center",
      width: 100,
    },
    {
      title: t(AnswerStatus.NEUTRAL),
      key: AnswerStatus.NEUTRAL,
      render: (_, record) => (
        <Radio
          checked={
            values.answers.find((answer) => answer.questionNumber === record.id)
              ?.answer === AnswerStatus.NEUTRAL
          }
          onChange={() => handleSelect(record.id, AnswerStatus.NEUTRAL)}
        />
      ),
      align: "center",
      width: 100,
    },
    {
      title: t(AnswerStatus.DISAGREE),
      key: AnswerStatus.DISAGREE,
      render: (_, record) => (
        <Radio
          checked={
            values.answers.find((answer) => answer.questionNumber === record.id)
              ?.answer === AnswerStatus.DISAGREE
          }
          onChange={() => handleSelect(record.id, AnswerStatus.DISAGREE)}
        />
      ),
      align: "center",
      width: 100,
    },
  ];
};

export default useQuestionsColumns;
