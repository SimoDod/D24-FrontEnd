import { useTranslation } from "react-i18next";
import { routePaths } from "../../../routerConfig";
import PageWrapper from "../../PageWrapper/PageWrapper";
import { fetchAllLearningReports } from "../../../store/thunks/report/fetchAllLearningReports";
import { Table } from "antd";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import classes from "./AllLearningReportsPage.module.scss";
import { useLearningReportsTable } from "../hooks/useLearningReportsTable";
import TableSearchHeader from "../../TableSearchHeader/TableSearchHeader";
import { pageSizes } from "../../../utils/constants";

const AllLearningReportsPage = () => {
  const { t } = useTranslation();
  const { allReports, isLoading } = useAppSelector((state) => state.report);
  const [pageSize, setPageSize] = useState(pageSizes.small);
  const dispatch = useAppDispatch();
  const { columns, filteredTableData, setSearchTerm } =
    useLearningReportsTable(allReports);

  useEffect(() => {
    dispatch(fetchAllLearningReports());
  }, [dispatch]);

  return (
    <PageWrapper title={t(routePaths.allLearningReports.label)}>
      <TableSearchHeader
        handleSearch={setSearchTerm}
        handlePageSize={setPageSize}
        pageSize={pageSize}
      />
      <Table
        className={classes.table}
        dataSource={filteredTableData}
        columns={columns}
        rowKey="reportNumber"
        bordered
        pagination={{ pageSize }}
        loading={isLoading}
        scroll={{ x: true }}
      />
    </PageWrapper>
  );
};

export default AllLearningReportsPage;
