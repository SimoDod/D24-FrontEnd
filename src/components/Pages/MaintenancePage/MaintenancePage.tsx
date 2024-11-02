import { useTranslation } from "react-i18next";
import { routePaths } from "../../../routerConfig";
import PageWrapper from "../../PageWrapper/PageWrapper";
import { Button, Flex, Input, Modal, Segmented, Select } from "antd";
import classes from "./MaintenancePage.module.scss";
import { MaintenanceTabs } from "./types";
import { useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import OfficeMaintenanceTable from "../../MaintenanceTables/OfficesMaintenanceTable/OfficesMaintenanceTable";
import SegmentsMaintenanceTable from "../../MaintenanceTables/SegmentsMaintenanceTable/SegmentsMaintenanceTable";
import TechBucketsMaintenanceTable from "../../MaintenanceTables/TechBucketsMaintenanceTable/TechBucketsMaintenanceTable";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { createOfficeThunk } from "../../../store/thunks/maintenance/createOfficeThunk";
import { createSegmentThunk } from "../../../store/thunks/maintenance/createSegmentThunk";
import { createTechBucketThunk } from "../../../store/thunks/maintenance/createTechBucketThunk";

const MaintenancePage = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const toggleModal = () => setIsOpen((prev) => !prev);
  const dispatch = useAppDispatch();
  const techBuckets = useAppSelector((state) => state.techBucket.techBuckets);
  const [selectedTechBuckets, setSelectedTechBuckets] = useState([]);
  const [tab, setTab] = useState(MaintenanceTabs.OFFICES);
  const [isLoading, setIsLoading] = useState(false);

  const checkIfFulfilled = (status: "rejected" | "fulfilled") => {
    if (status === "fulfilled") {
      setInputValue("");
      setSelectedTechBuckets([]);
      toggleModal();
    }
  };

  const handleAddMaintenanceItem = async () => {
    if (!inputValue) return;

    setIsLoading(true);

    if (tab === MaintenanceTabs.OFFICES) {
      const { meta } = await dispatch(createOfficeThunk(inputValue));
      checkIfFulfilled(meta.requestStatus);
    }
    if (tab === MaintenanceTabs.SEGMENTS) {
      const { meta } = await dispatch(
        createSegmentThunk({ name: inputValue, selectedTechBuckets })
      );
      checkIfFulfilled(meta.requestStatus);
    }
    if (tab === MaintenanceTabs.TECH_BUCKETS) {
      const { meta } = await dispatch(createTechBucketThunk(inputValue));
      checkIfFulfilled(meta.requestStatus);
    }
    setIsLoading(false);
  };

  return (
    <>
      <Modal
        title={`${t("buttons.add")} ${t("commonWords.new")} ${t(tab)}`}
        open={isOpen}
        onOk={handleAddMaintenanceItem}
        confirmLoading={isLoading}
        onCancel={toggleModal}
        okButtonProps={{
          disabled:
            !inputValue ||
            (tab === MaintenanceTabs.SEGMENTS && !selectedTechBuckets.length),
        }}
      >
        <Flex vertical gap={16}>
          <Input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            placeholder={t("commonWords.name")}
          />
          {tab === MaintenanceTabs.SEGMENTS && (
            <Select
              mode="tags"
              placeholder={t("maintenancePage.selectTechBucket")}
              value={selectedTechBuckets}
              onChange={(techBucketIds) =>
                setSelectedTechBuckets(techBucketIds)
              }
              options={techBuckets.map(({ name, _id }) => ({
                label: name,
                value: _id,
              }))}
            />
          )}
        </Flex>
      </Modal>
      <PageWrapper title={t(routePaths.maintenance.label)}>
        <Flex className={classes.container} vertical>
          <Flex justify="space-between">
            <Segmented<MaintenanceTabs>
              options={Object.values(MaintenanceTabs).map((tab) => ({
                value: tab,
                label: t(tab + "s"),
              }))}
              onChange={setTab}
            />
            <Button
              type="link"
              onClick={toggleModal}
              icon={<PlusCircleOutlined />}
            >
              {t("buttons.add")}
            </Button>
          </Flex>
          {tab === MaintenanceTabs.OFFICES && <OfficeMaintenanceTable />}
          {tab === MaintenanceTabs.SEGMENTS && <SegmentsMaintenanceTable />}
          {tab === MaintenanceTabs.TECH_BUCKETS && (
            <TechBucketsMaintenanceTable />
          )}
        </Flex>
      </PageWrapper>
    </>
  );
};

export default MaintenancePage;
