import { Table } from "antd";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { useEffect } from "react";
import { useMaintenanceTable } from "../hooks/useMaintenanceTable";
import { fetchAllSegmentsThunk } from "../../../store/thunks/maintenance/fetchAllSegmentsThunk";
import { MaintenanceTabs } from "../../Pages/MaintenancePage/types";
import { fetchAllTechBucketsThunk } from "../../../store/thunks/maintenance/fetchAllTechBucketsThunk";

const SegmentsMaintenanceTable = () => {
  const dispatch = useAppDispatch();
  const segments = useAppSelector((state) => state.segment.segments);
  const isLoading = useAppSelector((state) => state.segment.isLoading);
  const { columns } = useMaintenanceTable(MaintenanceTabs.SEGMENTS);

  useEffect(() => {
    dispatch(fetchAllSegmentsThunk());
    dispatch(fetchAllTechBucketsThunk());
  }, [dispatch]);

  return (
    <Table
      dataSource={segments}
      columns={columns}
      rowKey="name"
      scroll={{ x: true }}
      loading={isLoading}
      bordered
    />
  );
};

export default SegmentsMaintenanceTable;
