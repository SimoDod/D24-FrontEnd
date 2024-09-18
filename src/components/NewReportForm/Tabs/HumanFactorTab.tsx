import { Statistic, Row, Col, Flex } from "antd";
import { useFormikContext } from "formik";
import { Report } from "../types";
import { QuestionCategory } from "../../../data/types";
import calculateAnswerStatistics from "../../../utils/learningReport/calculateAnswerStatistics";
import classes from "./NewReportFormTabs.module.scss";
import TextArea from "antd/es/input/TextArea";
import { t } from "i18next";
import FormItemCol from "../../FormItemCol/FormItemCol";
import { humanFactorInputs } from "../constants";

const HumanFactorsTab = () => {
  const { values, touched, setFieldValue, errors } = useFormikContext<Report>();
  const stats = calculateAnswerStatistics(values.answers);

  return (
    <Flex align="center" justify="center" vertical>
      <Row className={classes.statisticsContainer}>
        {Object.values(QuestionCategory).map((questionCategory) => (
          <Col
            className={classes.statisticsCol}
            key={questionCategory}
            xs={24}
            sm={12}
            md={6}
            lg={6}
            xl={6}
          >
            <Statistic
              title={questionCategory}
              value={stats[questionCategory]}
            />
          </Col>
        ))}
      </Row>
      <Row className={classes.textAreaContainer} gutter={16}>
        {humanFactorInputs.map(({ placeholder, name }) => (
          <FormItemCol
            key={name}
            label={t(placeholder)}
            name={name}
            span={{ sm: 24 }}
          >
            <TextArea
              status={touched[name] && errors[name] ? "warning" : ""}
              value={values[name]}
              onChange={({ target }) => setFieldValue(name, target.value)}
            />
          </FormItemCol>
        ))}
      </Row>
    </Flex>
  );
};

export default HumanFactorsTab;
