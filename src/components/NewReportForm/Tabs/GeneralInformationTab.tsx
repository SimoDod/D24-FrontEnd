import { Input, Row, Select, Typography } from "antd";
import FormItemCol from "../../FormItemCol/FormItemCol";
import { useTranslation } from "react-i18next";
import { dateFormats } from "../../DatePicker/constants";
import TextArea from "antd/es/input/TextArea";
import classes from "./NewReportFormTabs.module.scss";
import { useFormikContext } from "formik";
import { MachineFamily, Report } from "../types";
import { format, isValid, parseISO } from "date-fns";
import MyDatePicker from "../../DatePicker/DatePicker";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { useEffect, useState } from "react";
import { fetchAllSegmentsThunk } from "../../../store/thunks/maintenance/fetchAllSegmentsThunk";
import { fetchAllOfficesThunk } from "../../../store/thunks/maintenance/fetchAllOfficesThunk";
import { TechBucket } from "../../../types/MaintenanceOptions";
const { Option } = Select;
const { Text } = Typography;

const GeneralInformationTab = () => {
  const { values, setFieldValue, errors, touched } = useFormikContext<Report>();
  const segments = useAppSelector((state) => state.segment.segments);
  const offices = useAppSelector((state) => state.office.offices);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [selectedTechBuckets, setSelectedTechBuckets] = useState<TechBucket[]>(
    []
  );

  useEffect(() => {
    dispatch(fetchAllSegmentsThunk());
    dispatch(fetchAllOfficesThunk());
  }, [dispatch]);

  const parseDateValue = (value: string | null) => {
    return value && isValid(parseISO(value)) ? parseISO(value) : null;
  };

  const handleSegmentChange = (v: string) => {
    setFieldValue("segment", v);
    const curSegment = segments.find((segment) => segment.name === v);

    if (curSegment?.selectedTechBuckets)
      setSelectedTechBuckets(curSegment?.selectedTechBuckets);
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
          onChange={(v) => handleSegmentChange(v)}
        >
          {Object.values(segments).map(({ name, _id }) => (
            <Option key={_id} value={name}>
              {name}
            </Option>
          ))}
        </Select>
      </FormItemCol>
      <FormItemCol label={t("newReportTabs.office")} name="office">
        <Select
          status={touched.segment && errors.segment ? "warning" : ""}
          value={values.office}
          onChange={(v) => setFieldValue("office", v)}
        >
          {Object.values(offices).map(({ name, _id }) => (
            <Option key={_id} value={name}>
              {name}
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
          {Object.values(selectedTechBuckets).map(({ name, _id }) => (
            <Option key={_id} value={name}>
              {name}
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
