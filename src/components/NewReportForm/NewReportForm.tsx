import { Formik, FormikProps } from "formik";
import { reportInitialValues, reportValidationSchema } from "./formConfig";
import { Form } from "antd";
import { NewReportTabKeys } from "../Pages/LearningReportPage/constants";
import { Report } from "./types";
import GeneralInformationTab from "./Tabs/GeneralInformationTab";
import QuestionsTab from "./Tabs/QuestionsTab";
import HumanFactorTab from "./Tabs/HumanFactorTab";
import AttachmentsTab from "./Tabs/AttachmentsTab";
import { Ref } from "react";

type Props = {
  tabKey: NewReportTabKeys;
  onSubmit: (values: Report) => void;
  formikRef: Ref<FormikProps<Report>>;
};

const NewReportForm = ({ tabKey, onSubmit, formikRef }: Props) => {
  return (
    <Formik
      initialValues={reportInitialValues}
      /* validationSchema={reportValidationSchema} */
      onSubmit={onSubmit}
      innerRef={formikRef}
    >
      {() => (
        <Form>
          {tabKey === NewReportTabKeys.GENERAL_INFO && (
            <GeneralInformationTab />
          )}
          {tabKey === NewReportTabKeys.QUESTIONS && <QuestionsTab />}
          {tabKey === NewReportTabKeys.HUMAN_FACTOR && <HumanFactorTab />}
          {tabKey === NewReportTabKeys.ATTACHMENTS && <AttachmentsTab />}
        </Form>
      )}
    </Formik>
  );
};

export default NewReportForm;
