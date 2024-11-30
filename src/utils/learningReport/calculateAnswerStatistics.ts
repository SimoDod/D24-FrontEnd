import { Answer, AnswerStatus } from "../../components/NewReportForm/types";
import { questionsData } from "../../data/questionsData";
import { QuestionCategory } from "../../data/types";

const calculateAnswerStatistics = (answers: Answer[]) => {
  const stats: Record<QuestionCategory, number> = {
    [QuestionCategory.LACK_OF_ASSERTIVENESS]: 0,
    [QuestionCategory.FATIGUE]: 0,
    [QuestionCategory.STRESS]: 0,
    [QuestionCategory.LACK_OF_TEAMWORK]: 0,
  };

  answers.forEach((answer) => {
    const question = questionsData.find(
      ({ id }) => id === answer.questionNumber
    );
    if (!question) return;

    const category = question.questionGroup;

    if (answer.answer === AnswerStatus.AGREE) {
      stats[category] += 1;
    }
  });

  return stats;
};

export default calculateAnswerStatistics;
