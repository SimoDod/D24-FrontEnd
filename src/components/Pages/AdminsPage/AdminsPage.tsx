import { useTranslation } from "react-i18next";
import { routePaths } from "../../../routerConfig";
import PageWrapper from "../../PageWrapper/PageWrapper";
import { Flex, Table } from "antd";
import { useAdminsTable } from "../hooks/useAdminsTable";
import classes from "./AdminsPage.module.scss";
import TableSearchHeader from "../../TableSearchHeader/TableSearchHeader";
import { useEffect, useState } from "react";
import { pageSizes } from "../../../utils/constants";
import { useAppSelector, useAppDispatch } from "../../../store/store";
import { fetchAdminsThunk } from "../../../store/thunks/fetchAdminsThunk";

const AdminsPage = () => {
  const { t } = useTranslation();
  const { admins, isLoading } = useAppSelector((state) => state.admins);
  const dispatch = useAppDispatch();
  const { columns, filteredTableData, setSearchTerm } = useAdminsTable(admins);
  const [pageSize, setPageSize] = useState(pageSizes.small);

  useEffect(() => {
    dispatch(fetchAdminsThunk());
  }, [dispatch]);

  return (
    <PageWrapper title={t(routePaths.admins.label)}>
      <Flex className={classes.container} vertical>
        <TableSearchHeader
          handleSearch={setSearchTerm}
          handlePageSize={setPageSize}
          pageSize={pageSize}
        />

        <Table
          className={classes.table}
          dataSource={filteredTableData}
          columns={columns}
          rowKey="email"
          bordered
          loading={isLoading}
          scroll={{ x: true }}
        />
      </Flex>
    </PageWrapper>
  );
};

export default AdminsPage;
