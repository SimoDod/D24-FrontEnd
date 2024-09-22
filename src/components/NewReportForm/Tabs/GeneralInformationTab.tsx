import { Input, Row, Select, Typography } from "antd";
import FormItemCol from "../../FormItemCol/FormItemCol";
import { useTranslation } from "react-i18next";
import { dateFormats } from "../../DatePicker/constants";
import TextArea from "antd/es/input/TextArea";
import classes from "./NewReportFormTabs.module.scss";
import { useFormikContext } from "formik";
import {
  AsmlOffices,
  MachineFamily,
  Report,
  Segments,
  TechBuckets,
} from "../types";
import { format, isValid, parseISO } from "date-fns";
import MyDatePicker from "../../DatePicker/DatePicker";

const { Option } = Select;
const { Text } = Typography;

const GeneralInformationTab = () => {
  const { values, setFieldValue, errors, touched } = useFormikContext<Report>();
  const { t } = useTranslation();

  const parseDateValue = (value: string | null) => {
    return value && isValid(parseISO(value)) ? parseISO(value) : null;
  };

  return (
    <Row gutter={[16, 16]}>
      <FormItemCol label={t("newReportTabs.reportNumber")} name="reportNumber">
        <Input disabled value={values.reportNumber} />
      </FormItemCol>
      <FormItemCol
        label={t("newReportTabs.reviewersEmail")}
        name="reviewersEmail"
      >
        <Select
          mode="tags"
          placeholder={t("newReportTabs.multipleEmailsTags")}
          value={values.reviewersEmail}
          onChange={(v) => setFieldValue("reviewersEmail", v)}
          status={errors.reviewersEmail ? "warning" : ""}
        >
          {values.reviewersEmail.map((email) => (
            <Option key={email} value={email}>
              {email}
            </Option>
          ))}
        </Select>
        <Text className={classes.colorWarning}>{errors.reviewersEmail}</Text>
      </FormItemCol>
      <FormItemCol label={t("newReportTabs.segment")} name="segment">
        <Select
          status={errors.segment ? "warning" : ""}
          value={values.segment}
          onChange={(v) => setFieldValue("segment", v)}
        >
          {Object.values(Segments).map((category) => (
            <Option key={category} value={category}>
              {category}
            </Option>
          ))}
        </Select>
      </FormItemCol>
      <FormItemCol label={t("newReportTabs.soNumber")} name="soNumber">
        <Input
          placeholder={t("commonWords.number")}
          id="soNumber"
          type="number"
          status={touched.soNumber && errors.soNumber ? "warning" : ""}
          value={values.soNumber}
          onChange={({ target }) => setFieldValue("soNumber", target.value)}
        />
      </FormItemCol>
      <FormItemCol label={t("newReportTabs.asmlOffice")} name="asmlOffice">
        <Select
          status={touched.segment && errors.segment ? "warning" : ""}
          value={values.asmlOffice}
          onChange={(v) => setFieldValue("asmlOffice", v)}
        >
          {Object.values(AsmlOffices).map((category) => (
            <Option key={category} value={category}>
              {category}
            </Option>
          ))}
        </Select>
      </FormItemCol>
      <FormItemCol
        label={t("newReportTabs.machineNumber")}
        name="machineNumber"
      >
        <Input
          placeholder={t("commonWords.number")}
          type="number"
          status={
            touched.machineNumber && errors.machineNumber ? "warning" : ""
          }
          value={values.machineNumber}
          onChange={({ target }) =>
            setFieldValue("machineNumber", target.value)
          }
        />
      </FormItemCol>
      <FormItemCol
        label={t("newReportTabs.timestampCraftsmanship")}
        name="timestampCraftsmanship"
      >
        <MyDatePicker
          showTime
          format={dateFormats.displayComplete}
          placeholder={dateFormats.displayComplete}
          className={classes.datePicker}
          status={errors.timestampCraftsmanship ? "warning" : ""}
          value={parseDateValue(values.timestampCraftsmanship)}
          onChange={(v: Date) =>
            setFieldValue(
              "timestampCraftsmanship",
              v ? format(v, dateFormats.complete) : null
            )
          }
        />
      </FormItemCol>
      <FormItemCol label={t("newReportTabs.lhm")} name="lhm">
        <Input
          placeholder={t("commonWords.number")}
          id="lhm"
          type="number"
          status={touched.lhm && errors.lhm ? "warning" : ""}
          value={values.lhm}
          onChange={({ target }) => setFieldValue("lhm", target.value)}
        />
      </FormItemCol>
      <FormItemCol label={t("newReportTabs.hoursDelay")} name="hoursDelay">
        <Input
          placeholder={t("commonWords.number")}
          id="hoursDelay"
          type="number"
          status={touched.hoursDelay && errors.hoursDelay ? "warning" : ""}
          value={values.hoursDelay}
          onChange={({ target }) => setFieldValue("hoursDelay", target.value)}
        />
      </FormItemCol>
      <FormItemCol label={t("newReportTabs.techBucket")} name="techBucket">
        <Select
          status={errors.techBucket ? "warning" : ""}
          value={values.techBucket}
          onChange={(v) => setFieldValue("techBucket", v)}
        >
          {Object.values(TechBuckets).map((category) => (
            <Option key={category} value={category}>
              {category}
            </Option>
          ))}
        </Select>
      </FormItemCol>
      <FormItemCol
        label={t("newReportTabs.machineFamily")}
        name="machineFamily"
      >
        <Select
          status={errors.machineFamily ? "warning" : ""}
          value={values.machineFamily}
          onChange={(v) => setFieldValue("machineFamily", v)}
        >
          {Object.values(MachineFamily).map((category) => (
            <Option key={category} value={category}>
              {category}
            </Option>
          ))}
        </Select>
      </FormItemCol>
      <FormItemCol label={t("newReportTabs.description")} name="description">
        <TextArea
          placeholder={t("commonWords.text")}
          status={touched.description && errors.description ? "warning" : ""}
          value={values.description}
          onChange={({ target }) => setFieldValue("description", target.value)}
        />
      </FormItemCol>
    </Row>
  );
};

export default GeneralInformationTab;
