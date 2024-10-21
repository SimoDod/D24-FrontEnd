import { Formik } from "formik";
import * as Yup from "yup";
import { Input, Button, Typography, Card, Form } from "antd";
import { Row } from "antd";
import classes from "./authPages.module.scss";
import FormItemCol from "../../FormItemCol/FormItemCol";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import i18n from "../../../localization/i18n";
import { registerThunk } from "../../../store/thunks/auth/registerThunk";
import { RegisterData } from "../../../types/User";
import { useAppDispatch } from "../../../store/store";
import { showFullScreenLoader } from "../../../store/slices/loaderSlice";
import { routePaths } from "../../../routerConfig";
import { menuItemKey } from "../../AppLayout/constants";

const { Title, Text } = Typography;

const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, i18n.t("errorValidation.usernameAtleastTwoCharacters"))
    .required(i18n.t("errorValidation.required")),
  email: Yup.string().email().required(i18n.t("errorValidation.invalidEmail")),
  password: Yup.string()
    .min(6, i18n.t("errorValidation.passwordAtleastSixCharacters"))
    .required(i18n.t("errorValidation.required")),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], i18n.t("errorValidation.passwordShouldMatch"))
    .required(i18n.t("errorValidation.required")),
});

const RegisterPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleRegister = async (registerData: RegisterData) => {
    localStorage.setItem(menuItemKey, routePaths.home.path);
    dispatch(showFullScreenLoader(true));
    await dispatch(registerThunk(registerData));
    dispatch(showFullScreenLoader(false));
  };

  return (
    <Row justify="center">
      <Card className={classes.registerContainer}>
        <Title level={1} className={classes.title}>
          {t("registerPage.register")}
        </Title>
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={RegisterSchema}
          onSubmit={handleRegister}
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
            <Form name="register" layout="vertical" onFinish={handleSubmit}>
              <Row gutter={[12, 12]}>
                <FormItemCol
                  span={{ xs: 24, sm: 24, md: 24, lg: 24, xl: 24 }}
                  label={t("registerPage.username")}
                  name="username"
                >
                  <Input
                    name="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    status={
                      touched.username && errors.username ? "warning" : ""
                    }
                  />
                  <Text>{touched.username && errors.username}</Text>
                </FormItemCol>

                <FormItemCol
                  span={{ xs: 24, sm: 24, md: 24, lg: 24, xl: 24 }}
                  label={t("registerPage.email")}
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
                  label={t("registerPage.password")}
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
                  label={t("registerPage.confirmPassword")}
                  name="confirmPassword"
                >
                  <Input.Password
                    name="confirmPassword"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    status={
                      touched.confirmPassword && errors.confirmPassword
                        ? "warning"
                        : ""
                    }
                  />
                  <Text>
                    {touched.confirmPassword && errors.confirmPassword}
                  </Text>
                </FormItemCol>

                <FormItemCol
                  span={{ xs: 24, sm: 24, md: 24, lg: 24, xl: 24 }}
                  name=""
                >
                  <Button
                    type="primary"
                    htmlType="submit"
                    disabled={!isValid || !dirty}
                    className={classes.button}
                  >
                    {t("buttons.register")}
                  </Button>
                </FormItemCol>
              </Row>
              <Text>
                {t("registerPage.alreadyHaveAccount")}
                <Button type="link" onClick={() => navigate("/login")}>
                  {t("buttons.login")}
                </Button>
              </Text>
            </Form>
          )}
        </Formik>
      </Card>
    </Row>
  );
};

export default RegisterPage;
