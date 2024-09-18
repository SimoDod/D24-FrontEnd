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

const { Title, Paragraph } = Typography;

const HomePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <PageWrapper title={t(routePaths.home.label)}>
      <Space direction="vertical" className={classes.heroSection}>
        <Title className={classes.heroTitle}>
          Creating a Safer and Better Environment for Everyone
        </Title>
        <Paragraph className={classes.heroParagraph}>
          Our incident reporting tool is designed to make sure your workplace is
          safe, efficient, and constantly improving. We don’t judge mistakes—
          instead, we focus on learning from them to foster a healthier work
          environment for everyone.
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
            <Title level={3}>Focus on Safety</Title>
            <Paragraph>
              Our main goal is to ensure the safety of everyone involved in
              production. Report incidents, get feedback, and implement safety
              measures to keep your workplace safe.
            </Paragraph>
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
            <Title level={3}>Continuous Improvement</Title>
            <Paragraph>
              Each report brings an opportunity for growth. Our system analyzes
              incidents, helping you make data-driven decisions to improve
              machine production and overall efficiency.
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
            <Title level={3}>Non-Judgmental</Title>
            <Paragraph>
              Mistakes happen, but we believe in learning from them without
              blame. Our system is designed to provide a safe space for
              reporting incidents without fear of judgment.
            </Paragraph>
          </Card>
        </Col>
      </Row>

      <Space direction="vertical" className={classes.aboutSection}>
        <Title level={2}>About the Application</Title>
        <Paragraph className={classes.aboutParagraph}>
          Our incident reporting application is built for teams working in CPU
          machine production environments, where precision, safety, and
          efficiency are key. The application allows workers to report issues
          and incidents without the worry of punishment or blame. Instead, we
          focus on understanding the root causes and improving the environment
          for everyone. Our ultimate goal is to create a safe, efficient, and
          productive workplace, one report at a time.
        </Paragraph>
      </Space>

      <Space size="large" className={classes.ctaButton}>
        <Button
          onClick={() => navigate(routePaths.learningReport.pathNew)}
          type="link"
        >
          Report an Incident
        </Button>
      </Space>
    </PageWrapper>
  );
};

export default HomePage;
