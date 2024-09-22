import { Formik } from "formik";
import { reportInitialValues /* reportValidationSchema */ } from "./formConfig";
import { Flex, Form, Progress, Space, Spin, Tabs, Typography } from "antd";
import {
  newReportTabItems,
  NewReportTabKeys,
} from "../Pages/LearningReportPage/constants";
import { Report, ReportStatus } from "./types";
import GeneralInformationTab from "./Tabs/GeneralInformationTab";
import QuestionsTab from "./Tabs/QuestionsTab";
import HumanFactorTab from "./Tabs/HumanFactorTab";
import AttachmentsTab from "./Tabs/AttachmentsTab";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import ColorButton from "../ColorButton/ColorButton";
import classes from "./NewReportForm.module.scss";
import { useTranslation } from "react-i18next";
import { fetchReportThunk } from "../../store/thunks/fetchReportThunk";
import { useNavigate, useParams } from "react-router-dom";
import { routePaths } from "../../routerConfig";
import { postReportThunk } from "../../store/thunks/postReportThunk";
import { resetReport } from "../../store/slices/reportSlice";
import { reportTabKey } from "./constants";
import { questionsData } from "../../data/questionsData";
import calculateReportFilledPercentage from "../../utils/learningReport/calculateReportFilledPercentage";

const { Text, Title } = Typography;

const isReport = (payload: unknown): payload is Report =>
  typeof payload === "object" && payload !== null && "reportNumber" in payload;

const NewReportForm = () => {
  const { report, isLoading } = useAppSelector((state) => state.report);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [tabKey, setTabKey] = useState(
    localStorage.getItem(reportTabKey) || NewReportTabKeys.GENERAL_INFO
  );
  const { reportNumber } = useParams();
  const navigate = useNavigate();
  const userId = useAppSelector((state) => state.auth.user?._id);

  useEffect(() => {
    const fetchReport = async () => {
      if (reportNumber && reportNumber !== routePaths.learningReport.new) {
        const { meta } = await dispatch(fetchReportThunk(reportNumber));

        if (meta.requestStatus === "rejected") {
          navigate(routePaths.notFound.path);
        }
      } else {
        dispatch(resetReport());
      }
    };
    fetchReport();
  }, [dispatch, navigate, reportNumber]);

  const handleFormSubmit = async (values: Report, status?: ReportStatus) => {
    const newData = {
      ...values,
      status: !status ? report.status : status,
      userId,
    };

    if (reportNumber === routePaths.learningReport.new) {
      const { meta, payload } = await dispatch(postReportThunk(newData));

      if (meta.requestStatus === "fulfilled" && payload) {
        if (isReport(payload)) {
          navigate(routePaths.learningReport.path + payload.reportNumber);
        }
      }
    } else {
      dispatch(postReportThunk(newData));
    }
  };

  const handleTabKeyChange = (newTabKey: string) => {
    setTabKey(newTabKey as NewReportTabKeys);
    localStorage.setItem(reportTabKey, newTabKey);
  };

  return (
    <Formik
      initialValues={report ? report : reportInitialValues}
      /* validationSchema={reportValidationSchema} */
      onSubmit={() => {}}
      enableReinitialize
    >
      {({ values }) => (
        <>
          <Flex wrap justify="space-between" className={classes.container}>
            <Space>
              <Text className={classes.status} type="secondary">
                {/* TODO translate */}
                Status:
              </Text>
              <Text className={classes.status}>{report.status}</Text>
            </Space>
            {isLoading ? (
              <Spin size="large" className={classes.spinner} />
            ) : (
              <Space wrap>
                {ReportStatus.CLOSED !== report.status && (
                  <ColorButton
                    onClick={() => handleFormSubmit(values)}
                    color="green"
                  >
                    {t("buttons.save")}
                  </ColorButton>
                )}
                {ReportStatus.NEW === report.status && (
                  <ColorButton
                    onClick={() =>
                      handleFormSubmit(values, ReportStatus.SUBMITTED)
                    }
                  >
                    {t("buttons.submit")}
                  </ColorButton>
                )}
                {ReportStatus.SUBMITTED === report.status && (
                  <>
                    <ColorButton
                      onClick={() => handleFormSubmit(values, ReportStatus.NEW)}
                    >
                      {t("buttons.unSubmit")}
                    </ColorButton>
                    <ColorButton
                      onClick={() =>
                        handleFormSubmit(values, ReportStatus.REVIEWED)
                      }
                    >
                      {t("buttons.review")}
                    </ColorButton>
                  </>
                )}
                {ReportStatus.REVIEWED === report.status && (
                  <>
                    <ColorButton
                      onClick={() =>
                        handleFormSubmit(values, ReportStatus.SUBMITTED)
                      }
                    >
                      {t("buttons.unReview")}
                    </ColorButton>
                    <ColorButton
                      onClick={() =>
                        handleFormSubmit(values, ReportStatus.CLOSED)
                      }
                      color="red"
                    >
                      {t("buttons.close")}
                    </ColorButton>
                  </>
                )}
                <ColorButton
                  onClick={() => handleFormSubmit(values)}
                  color="red"
                >
                  {t("buttons.delete")}
                </ColorButton>
              </Space>
            )}
          </Flex>
          <Flex gap="large" vertical>
            <Progress
              percent={calculateReportFilledPercentage(
                values,
                questionsData.length
              )}
            />
            <Tabs
              activeKey={localStorage.getItem(reportTabKey) || ReportStatus.NEW}
              items={newReportTabItems}
              onChange={handleTabKeyChange}
            />
          </Flex>
          <Title level={2} className={classes.tabTitle}>
            {t(tabKey)}
          </Title>
          <Form>
            {tabKey === NewReportTabKeys.GENERAL_INFO && (
              <GeneralInformationTab />
            )}
            {tabKey === NewReportTabKeys.QUESTIONS && <QuestionsTab />}
            {tabKey === NewReportTabKeys.HUMAN_FACTOR && <HumanFactorTab />}
            {tabKey === NewReportTabKeys.ATTACHMENTS && <AttachmentsTab />}
          </Form>
        </>
      )}
    </Formik>
  );
};

export default NewReportForm;
