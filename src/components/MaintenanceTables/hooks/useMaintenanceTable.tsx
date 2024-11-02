import { Button, Modal, Select, TableProps, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { Segment } from "../../../types/MaintenanceOptions";
import { MaintenanceTabs } from "../../Pages/MaintenancePage/types";
import { EditOutlined } from "@ant-design/icons";
import { sizes } from "../../../theme/variables";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { updateOfficeNameThunk } from "../../../store/thunks/maintenance/updateOfficeNameThunk";
import { deleteOfficeThunk } from "../../../store/thunks/maintenance/deleteOfficeThunk";
import { updateSegmentThunk } from "../../../store/thunks/maintenance/updateSegmentThunk";
import { updateTechBucketNameThunk } from "../../../store/thunks/maintenance/updateTechBucketThunk";
import { deleteSegmentThunk } from "../../../store/thunks/maintenance/deleteSegmentThunk";
import { deleteTechBucketThunk } from "../../../store/thunks/maintenance/deleteTechBucketThunk";
const { Text } = Typography;
const { confirm } = Modal;

//TODO translate

export const useMaintenanceTable = (tab: MaintenanceTabs) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const techBuckets = useAppSelector((state) => state.techBucket.techBuckets);

  const handleNameEdit = (newName: string, id: string) => {
    if (tab === MaintenanceTabs.OFFICES) {
      dispatch(updateOfficeNameThunk({ name: newName, id }));
    }
    if (tab === MaintenanceTabs.SEGMENTS) {
      dispatch(updateSegmentThunk({ name: newName, segmentId: id }));
    }
    if (tab === MaintenanceTabs.TECH_BUCKETS) {
      dispatch(updateTechBucketNameThunk({ name: newName, id }));
    }
  };

  const handleItemDelete = (id: string) => {
    confirm({
      title: t("modal.deleteItemConfirm"),
      onOk() {
        if (tab === MaintenanceTabs.OFFICES) {
          dispatch(deleteOfficeThunk(id));
        }
        if (tab === MaintenanceTabs.SEGMENTS) {
          dispatch(deleteSegmentThunk(id));
        }
        if (tab === MaintenanceTabs.TECH_BUCKETS) {
          dispatch(deleteTechBucketThunk(id));
        }
      },
    });
  };

  const handleTechBucketChange = (value: string[], segmentId: string) => {
    dispatch(updateSegmentThunk({ segmentId, selectedTechBuckets: value }));
  };

  const techBucketsColumn = {
    title: t("Tech Buckets"),
    key: "techBuckets",
    width: "45%",
    render: ({ selectedTechBuckets, _id: segmentId }: Segment) => (
      <Select
        mode="tags"
        placeholder={t("maintenancePage.selectTechBucket")}
        value={selectedTechBuckets.map(({ _id }) => _id)}
        onChange={(techBucketIds) =>
          handleTechBucketChange(techBucketIds, segmentId)
        }
        options={techBuckets.map(({ name, _id }) => ({
          label: name,
          value: _id,
          key: _id,
        }))}
        style={{ minWidth: sizes.size * 50 }}
      />
    ),
  };

  const columns: TableProps["columns"] = [
    {
      title: t("Name"),
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (row) => {
        const editableRow = { ...row };

        return (
          <Text
            editable={{
              onChange: (newName) => (editableRow.name = newName),
              onEnd: () => handleNameEdit(editableRow.name, editableRow._id),
              icon: <EditOutlined style={{ fontSize: sizes.size3x }} />,
            }}
            style={{ marginLeft: sizes.size2x }}
          >
            {editableRow.name}
          </Text>
        );
      },
    },
    ...(tab === MaintenanceTabs.SEGMENTS ? [techBucketsColumn] : []),
    {
      title: t("Actions"),
      key: "actions",
      width: 120,
      render: ({ _id }) => (
        <Button type="link" onClick={() => handleItemDelete(_id)}>
          {t("Remove")}
        </Button>
      ),
    },
  ];

  return { columns };
};
