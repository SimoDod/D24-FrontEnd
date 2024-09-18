import { Formik } from "formik";
import * as Yup from "yup";
import { Input, Button, Typography, Card, Form } from "antd";
import { Row } from "antd";
import classes from "./authPages.module.scss";
import FormItemCol from "../../FormItemCol/FormItemCol";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import i18n from "../../../localization/i18n";
import { useAppDispatch } from "../../../store/store";
import { loginThunk } from "../../../store/thunks/loginThunk";
import { LoginData } from "../../../types/User";
import { showFullScreenLoader } from "../../../store/slices/loaderSlice";

const { Title, Text } = Typography;

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email(i18n.t("errorValidation.invalidEmail"))
    .required(i18n.t("errorValidation.required")),
  password: Yup.string()
    .min(6, i18n.t("errorValidation.passwordAtleastSixCharacters"))
    .required(i18n.t("errorValidation.required")),
});

const LoginPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogin = async (loginData: LoginData) => {
    dispatch(showFullScreenLoader(true));
    await dispatch(loginThunk(loginData));
    dispatch(showFullScreenLoader(false));
  };

  return (
    <Row justify="center">
      <Card className={classes.loginContainer}>
        <Title level={1} className={classes.title}>
          {t("loginPage.login")}
        </Title>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={handleLogin}
        >
          {({
            isValid,
            dirty,
            handleChange,
            handleBlur,
            handleSubmit,
            errors,
            touched,
          }) => (
            <Form name="login" layout="vertical" onFinish={handleSubmit}>
              <Row gutter={[12, 12]}>
                <FormItemCol
                  span={{ xs: 24, sm: 24, md: 24, lg: 24, xl: 24 }}
                  label={t("loginPage.email")}
                  name="email"
                >
                  <Input
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    status={touched.email && errors.email ? "warning" : ""}
                  />
                  <Text>{touched.email && errors.email}</Text>
                </FormItemCol>

                <FormItemCol
                  span={{ xs: 24, sm: 24, md: 24, lg: 24, xl: 24 }}
                  label={t("loginPage.password")}
                  name="password"
                >
                  <Input.Password
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    status={
                      touched.password && errors.password ? "warning" : ""
                    }
                  />
                  <Text>{touched.password && errors.password}</Text>
                </FormItemCol>

                <FormItemCol
                  span={{ xs: 24, sm: 24, md: 24, lg: 24, xl: 24 }}
                  labelCol={24}
                  wrapperCol={24}
                  name=""
                >
                  <Button
                    type="primary"
                    htmlType="submit"
                    disabled={!isValid || !dirty}
                    className={classes.button}
                  >
                    {t("buttons.login")}
                  </Button>
                </FormItemCol>
              </Row>
              <Text>
                {t("loginPage.noAccount")}{" "}
                <Button type="link" onClick={() => navigate("/register")}>
                  {t("buttons.register")}
                </Button>
              </Text>
            </Form>
          )}
        </Formik>
      </Card>
    </Row>
  );
};

export default LoginPage;
