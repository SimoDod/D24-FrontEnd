import { useTranslation } from "react-i18next";
import { routePaths } from "../../../routerConfig";
import PageWrapper from "../../PageWrapper/PageWrapper";
import { Button, Cascader, Flex, Input, Modal, Segmented, Table } from "antd";
import classes from "./MaintenancePage.module.scss";
import { MaintenanceTabs } from "./types";
import { useMaintenanceTable } from "../hooks/useMaintenanceTable";
import { useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";

const MaintenancePage = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen((prev) => !prev);
  const [tab, setTab] = useState(MaintenanceTabs.OFFICES);
  const { columns } = useMaintenanceTable(tab === MaintenanceTabs.SEGMENTS);

  return (
    <>
      <Modal
        title={`${t("buttons.add")} ${t("commonWords.new")} ${t(tab)}`}
        open={isOpen}
        /* onOk={handleOk} */
        /* confirmLoading={confirmLoading} */
        onCancel={toggleModal}
      >
        <Flex vertical gap={16}>
          <Input placeholder={t("Name")} />
          {
            /* tab === MaintenanceTabs.SEGMENTS && */ <Cascader
              placeholder={t("Tech Buckets")}
              className={classes.cascader}
              /* options={options} */
              /* onChange={onChange} */
              multiple
              defaultValue={[["bamboo", "little", "fish"]]}
            />
          }
        </Flex>
      </Modal>
      <PageWrapper title={t(routePaths.maintenance.label)}>
        <Flex className={classes.container} vertical>
          <Flex justify="space-between">
            <Segmented<MaintenanceTabs>
              options={Object.values(MaintenanceTabs).map((tab) => ({
                value: tab,
                label: t(tab),
              }))}
              onChange={setTab}
            />
            <Button onClick={toggleModal} icon={<PlusCircleOutlined />}>
              {t(tab)}
            </Button>
          </Flex>
          <Table columns={columns} />
        </Flex>
      </PageWrapper>
    </>
  );
};

export default MaintenancePage;
