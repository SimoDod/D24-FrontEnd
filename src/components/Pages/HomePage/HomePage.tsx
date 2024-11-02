import { useTranslation } from "react-i18next";
import PageWrapper from "../../PageWrapper/PageWrapper";
import { routePaths } from "../../../routerConfig";
import { Row, Col, Typography, Button, Card, Space } from "antd";
import {
  SafetyOutlined,
  BarChartOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import classes from "./HomePage.module.scss";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../store/store";
const { Title, Paragraph } = Typography;

const HomePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const username = useAppSelector((state) => state.auth.user?.username);

  return (
    <PageWrapper title={t("homePage.welcome") + username}>
      <Space direction="vertical" className={classes.heroSection}>
        <Paragraph className={classes.heroParagraph}>
          {t("homePage.description")}
        </Paragraph>
      </Space>
      <Row
        gutter={[32, 32]}
        justify="center"
        className={classes.featureSection}
      >
        <Col xs={24} sm={12} md={8}>
          <Card
            hoverable
            className={classes.featureCard}
            cover={<SafetyOutlined className={classes.featureIconSafety} />}
          >
            <Title level={3}>{t("homePage.focusOnSafetyTitle")}</Title>
            <Paragraph>{t("homePage.focusOnSafetyDescription")}</Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            hoverable
            className={classes.featureCard}
            cover={
              <BarChartOutlined className={classes.featureIconImprovement} />
            }
          >
            <Title level={3}>{t("homePage.continuousImprovementTitle")}</Title>
            <Paragraph>
              {t("homePage.continuousImprovementDescription")}
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            hoverable
            className={classes.featureCard}
            cover={
              <SmileOutlined className={classes.featureIconNonJudgmental} />
            }
          >
            <Title level={3}>{t("homePage.nonJudgmentalTitle")}</Title>
            <Paragraph>{t("homePage.nonJudgmentalDescription")}</Paragraph>
          </Card>
        </Col>
      </Row>
      <Space direction="vertical" className={classes.aboutSection}>
        <Title level={2}>{t("homePage.aboutTitle")}</Title>
        <Paragraph className={classes.aboutParagraph}>
          {t("homePage.aboutDescription")}
        </Paragraph>
      </Space>
      <Space size="large" className={classes.ctaButton}>
        <Button
          onClick={() => navigate(routePaths.learningReport.pathNew)}
          type="link"
        >
          {t("homePage.reportButton")}
        </Button>
      </Space>
    </PageWrapper>
  );
};

export default HomePage;
