import { Row, Switch, Table, Typography } from "antd";
import classes from "./NewReportFormTabs.module.scss";
import FormItemCol from "../../FormItemCol/FormItemCol";
import { QuestionType, Report } from "../types";
import useQuestionsColumns from "../hooks/useQuestionsColumns";
import { binaryQuestions } from "../constants";
import { useTranslation } from "react-i18next";
import { useFormikContext } from "formik";
import { questionsData } from "../../../data/questionsData";

const { Paragraph } = Typography;

const QuestionsTab = () => {
  const { values, setFieldValue } = useFormikContext<Report>();
  const columns = useQuestionsColumns(values, setFieldValue);
  const { t } = useTranslation();

  const getRowClassName = (record: QuestionType) => {
    const selectedAnswer = values.answers.find(
      (answer) => answer.questionNumber === record.id
    );
    return selectedAnswer ? classes.selectedRow : "";
  };

  return (
    <>
      <Row justify="space-around" gutter={[16, 16]}>
        {binaryQuestions.map(({ text, name }) => (
          <FormItemCol
            key={name}
            span={{ xxl: 4, xl: 8, md: 12, sm: 16, xs: 24 }}
            name={name}
          >
            <Paragraph className={classes.paragraph}>
              {t(text)}
              {": "}
              <Switch
                className={classes.switch}
                checkedChildren="Yes"
                unCheckedChildren="No"
                onChange={(v) => setFieldValue(name, v)}
                checked={values[name]}
              />
            </Paragraph>
          </FormItemCol>
        ))}
      </Row>

      <Table
        columns={columns}
        dataSource={questionsData}
        rowKey="id"
        scroll={{ x: 700, y: 600 }}
        pagination={false}
        rowClassName={getRowClassName}
      />
    </>
  );
};

export default QuestionsTab;
