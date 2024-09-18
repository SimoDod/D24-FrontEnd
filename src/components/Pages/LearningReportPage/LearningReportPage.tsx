import { useTranslation } from "react-i18next";
import { routePaths } from "../../../routerConfig";
import PageWrapper from "../../PageWrapper/PageWrapper";
import { useRef, useState } from "react";
import { Flex, Space, Tabs, Typography } from "antd";
import { newReportTabItems, NewReportTabKeys } from "./constants";
import classes from "./LearningReportPage.module.scss";
import ColorButton from "../../ColorButton/ColorButton";
import NewReportForm from "../../NewReportForm/NewReportForm";
import { Report, ReportStatus } from "../../NewReportForm/types";
import { MouseEvent } from "react";
import { useParams } from "react-router-dom";
import getLearningReportHeading from "../../../utils/learningReport/getLearningReportHeading";
import { FormikProps } from "formik";
import { useAppDispatch } from "../../../store/store";
import { openMandatoryFieldsNotification } from "../../../store/slices/notificationSlice";

const { Text, Title } = Typography;

const LearningReportPage = () => {
  const { t } = useTranslation();
  const [tabKey, setTabKey] = useState(NewReportTabKeys.GENERAL_INFO);
  const [status, setStatus] = useState(ReportStatus.NEW);
  const dispatch = useAppDispatch();
  const { reportNumber } = useParams();
  const formikRef = useRef<FormikProps<Report>>(null);

  const isNewReport = reportNumber !== routePaths.learningReport.new;

  if (isNewReport) {
    //TODO fetch report
    console.log(reportNumber);
  }

  const handleTabKeyChange = (key: string) =>
    setTabKey(key as NewReportTabKeys);

  const handleSubmit = (values: Report) => {
    const valuesWithUpdatedStatus = { ...values, status };
    console.log(valuesWithUpdatedStatus);
  };

  const handleGetStatus = (e: MouseEvent<HTMLButtonElement>) => {
    const newStatus = e.currentTarget.value as ReportStatus;

    if (formikRef.current) {
      formikRef.current.submitForm();

      if (formikRef.current.isValid) {
        if (newStatus) {
          setStatus(newStatus);
        }
      } else {
        dispatch(openMandatoryFieldsNotification());
      }
    }
  };

  return (
    <PageWrapper title={getLearningReportHeading(isNewReport, reportNumber)}>
      <Flex justify="space-between" className={classes.container}>
        <Space>
          <Text className={classes.status} type="secondary">
            {/* TODO translate */}
            Status:
          </Text>
          <Text className={classes.status}>{status}</Text>
        </Space>
        <Space wrap>
          {ReportStatus.CLOSED !== status && (
            <ColorButton onClick={handleGetStatus} color="green">
              {t("buttons.save")}
            </ColorButton>
          )}

          {ReportStatus.NEW === status && (
            <ColorButton
              onClick={handleGetStatus}
              value={ReportStatus.SUBMITTED}
            >
              {t("buttons.submit")}
            </ColorButton>
          )}

          {ReportStatus.SUBMITTED === status && (
            <>
              <ColorButton onClick={handleGetStatus} value={ReportStatus.NEW}>
                {t("buttons.unSubmit")}
              </ColorButton>
              <ColorButton
                onClick={handleGetStatus}
                value={ReportStatus.REVIEWED}
              >
                {t("buttons.review")}
              </ColorButton>
            </>
          )}

          {ReportStatus.REVIEWED === status && (
            <>
              <ColorButton
                onClick={handleGetStatus}
                value={ReportStatus.SUBMITTED}
              >
                {t("buttons.unReview")}
              </ColorButton>
              <ColorButton
                onClick={handleGetStatus}
                value={ReportStatus.CLOSED}
                color="red"
              >
                {t("buttons.close")}
              </ColorButton>
            </>
          )}

          <ColorButton onClick={handleGetStatus} color="red">
            {t("buttons.delete")}
          </ColorButton>
        </Space>
      </Flex>
      <Tabs items={newReportTabItems} onChange={handleTabKeyChange} />
      <Title level={2} className={classes.tabTitle}>
        {t(tabKey)}
      </Title>
      <NewReportForm
        formikRef={formikRef}
        onSubmit={handleSubmit}
        tabKey={tabKey}
      />
    </PageWrapper>
  );
};

export default LearningReportPage;
