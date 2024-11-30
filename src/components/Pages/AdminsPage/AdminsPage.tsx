import { useTranslation } from "react-i18next";
import { routePaths } from "../../../routerConfig";
import PageWrapper from "../../PageWrapper/PageWrapper";
import { Avatar, Card, Flex, Tag, Typography } from "antd";
import classes from "./AdminsPage.module.scss";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../store/store";
import { fetchAdminsThunk } from "../../../store/thunks/admins/fetchAdminsThunk";
import { EditOutlined, SettingOutlined } from "@ant-design/icons";
import { UserRole } from "../../../types/User";
const { Paragraph } = Typography;

const getAdminRoleColor = (role: UserRole) => {
  switch (role) {
    case UserRole.LOCAL_ADMIN:
      return "blue";
    case UserRole.CENTRAL_ADMIN:
      return "red";
    default:
      return "default";
  }
};

const AdminsPage = () => {
  const { t } = useTranslation();
  const { admins, isLoading } = useAppSelector((state) => state.admin);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAdminsThunk());
  }, [dispatch]);

  return (
    <PageWrapper title={t(routePaths.admins.label)}>
      <Flex
        className={classes.container}
        gap={16}
        align="center"
        justify="center"
        wrap
      >
        {admins.map(({ email, _id, role, username }) => (
          <Card
            className={classes.card}
            key={_id}
            loading={isLoading}
            actions={[
              <EditOutlined key="edit" />,
              <SettingOutlined key="setting" />,
            ]}
          >
            <Card.Meta
              avatar={
                <Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${Math.random()}`} />
              }
              title={username}
              description={
                <>
                  <Paragraph>{email}</Paragraph>
                  <Tag color={getAdminRoleColor(role)}>
                    {t(`adminsPage.${role}`)}
                  </Tag>
                </>
              }
            />
          </Card>
        ))}
      </Flex>
    </PageWrapper>
  );
};

export default AdminsPage;
