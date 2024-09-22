import { useTranslation } from "react-i18next";
import { routePaths } from "../../../routerConfig";
import PageWrapper from "../../PageWrapper/PageWrapper";
import { fetchAllLearningReports } from "../../../store/thunks/fetchAllLearningReports";
import { Table } from "antd";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { useLearningReportColumns } from "../hooks/useLearningReportsColumn";
import classes from "./AllLearningReportsPage.module.scss";

const AllLearningReportsPage = () => {
  const { t } = useTranslation();
  const { allReports, isLoading } = useAppSelector((state) => state.report);
  const dispatch = useAppDispatch();
  const columns = useLearningReportColumns();

  useEffect(() => {
    dispatch(fetchAllLearningReports());
  }, [dispatch]);

  return (
    <PageWrapper title={t(routePaths.allLearningReports.label)}>
      <Table
        className={classes.table}
        dataSource={allReports}
        columns={columns}
        rowKey="reportNumber"
        bordered
        pagination={{ pageSize: 10 }}
        loading={isLoading}
        scroll={{ x: "max-content" }}
      />
    </PageWrapper>
  );
};

export default AllLearningReportsPage;
