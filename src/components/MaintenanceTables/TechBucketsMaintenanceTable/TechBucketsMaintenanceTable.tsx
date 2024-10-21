import { Table } from "antd";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { useEffect } from "react";
import { useMaintenanceTable } from "../hooks/useMaintenanceTable";
import { fetchAllTechBucketsThunk } from "../../../store/thunks/maintenance/fetchAllTechBucketsThunk";
import { MaintenanceTabs } from "../../Pages/MaintenancePage/types";

const TechBucketsMaintenanceTable = () => {
  const dispatch = useAppDispatch();
  const techBuckets = useAppSelector((state) => state.techBucket.techBuckets);
  const isLoading = useAppSelector((state) => state.techBucket.isLoading);
  const { columns } = useMaintenanceTable(MaintenanceTabs.TECH_BUCKETS);

  useEffect(() => {
    dispatch(fetchAllTechBucketsThunk());
  }, [dispatch]);

  return (
    <Table
      dataSource={techBuckets}
      columns={columns}
      rowKey="name"
      scroll={{ x: true }}
      loading={isLoading}
      bordered
    />
  );
};

export default TechBucketsMaintenanceTable;
