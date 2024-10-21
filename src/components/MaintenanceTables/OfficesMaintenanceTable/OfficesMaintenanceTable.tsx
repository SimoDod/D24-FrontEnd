import { Table } from "antd";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { fetchAllOfficesThunk } from "../../../store/thunks/maintenance/fetchAllOfficesThunk";
import { useEffect } from "react";
import { useMaintenanceTable } from "../hooks/useMaintenanceTable";
import { MaintenanceTabs } from "../../Pages/MaintenancePage/types";

const OfficeMaintenanceTable = () => {
  const dispatch = useAppDispatch();
  const offices = useAppSelector((state) => state.office.offices);
  const isLoading = useAppSelector((state) => state.office.isLoading);
  const { columns } = useMaintenanceTable(MaintenanceTabs.OFFICES);

  useEffect(() => {
    dispatch(fetchAllOfficesThunk());
  }, [dispatch]);

  return (
    <Table
      dataSource={offices}
      columns={columns}
      rowKey="name"
      scroll={{ x: true }}
      loading={isLoading}
      bordered
    />
  );
};

export default OfficeMaintenanceTable;
