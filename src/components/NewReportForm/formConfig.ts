/* import i18n from "../../localization/i18n"; */
import { Report, ReportStatus } from "./types";
import * as Yup from "yup";

export const reportInitialValues: Report = {
  id: 0,
  reviewersEmail: [],
  segment: "",
  soNumber: "",
  lhm: "",
  asmlOffice: "",
  machineNumber: "",
  timestampCraftsmanship: null,
  hoursDelay: "",
  techBucket: "",
  machineFamily: "",
  description: "",
  mealTime: false,
  continuousWork: false,
  experienced: false,
  gotTraining: false,
  customerInterference: false,
  workAlone: false,
  background: "",
  myselInfluence: "",
  riskReduceDescription: "",
  teamInfluence: "",
  managerInfluence: "",
  status: ReportStatus.NEW,
  archived: false,
  permissions: {
    CanSubmit: false,
    CanUnsubmit: false,
    CanReview: false,
    CanEdit: false,
    CanClose: false,
    CanDelete: false,
    CanEditClose: false,
    CanAlwaysDelete: false,
  },
  answers: [],
  reportNumber: "",
  submitterEmail: "",
  filePath: null,
  filePathSecond: null,
  filePathThird: null,
  downloadFileURL: null,
  downloadFileUrlSecond: null,
  downloadFileUrlThird: null,
};

export const reportValidationSchema = Yup.object().shape({
  id: Yup.number(),
  reviewersEmail: Yup.array() /* .of(
    Yup.string().email(i18n.t("errorValidation.invalidEmail"))
  ), */,
  segment: Yup.string(),
  soNumber: Yup.string(),
  asmlOffice: Yup.string(),
  machineNumber: Yup.string(),
  timestampCraftsmanship: Yup.string().nullable(),
  hoursDelay: Yup.string(),
  lhm: Yup.string(),
  techBucket: Yup.string(),
  machineFamily: Yup.string(),
  description: Yup.string(),
  mealTime: Yup.string(),
  continuousWork: Yup.string(),
  experienced: Yup.string(),
  gotTraining: Yup.string(),
  customerInterference: Yup.string(),
  workAlone: Yup.string(),
  background: Yup.string(),
  myselInfluence: Yup.string(),
  riskReduceDescription: Yup.string(),
  teamInfluence: Yup.string(),
  managerInfluence: Yup.string(),
  status: Yup.string(),
  archived: Yup.boolean(),
  permissions: Yup.object().shape({
    CanSubmit: Yup.boolean(),
    CanUnsubmit: Yup.boolean(),
    CanReview: Yup.boolean(),
    CanEdit: Yup.boolean(),
    CanClose: Yup.boolean(),
    CanDelete: Yup.boolean(),
    CanEditClose: Yup.boolean(),
    CanAlwaysDelete: Yup.boolean(),
  }),
  answers: Yup.array().of(
    Yup.object().shape({
      id: Yup.number(),
      questionNumber: Yup.number(),
      reportId: Yup.number(),
      answer: Yup.string(),
      updateNumber: Yup.number(),
    })
  ),
});

/* export const filledInitialValues: Report = {
  id: 1612,
  reviewersEmail: [{ text: "ROBE" }],
  segment: "EUV Upgrades",
  soNumber: "5000123456",
  asmlOffice: "28",
  machineNumber: "1234",
  timestampCraftsmanship: "2021-05-12T21:00:00.000Z",
  hoursDelay: "4",
  LHM: "1",
  coachProcedure: "cam",
  techBucket: "diagnostics",
  machineFamily: "AT,XT,NXT",
  airId: null,
  description: "12",
  dateCreated: "2024-09-04T09:30:39.000Z",
  dateLastUpdated: "2024-09-17T09:55:07.000Z",
  dateSubmitted: "2024-09-17T09:55:07.000Z",
  dateReviewed: "2024-09-17T08:47:22.000Z",
  dateClosed: null,
  mealTime: "no",
  continuousWork: "no",
  experienced: "no",
  gotTraining: "no",
  customerInterference: "yes",
  workAlone: "no",
  background: "dsa",
  myselInfluence: "dsa",
  riskReduceDescription: "sda",
  teamInfluence: "dsa",
  managerInfluence: "dsa",
  status: ReportStatus.SUBMITTED,
  archived: 0,
  userMail: "centraluser@test.user",
  permissions: {
    CanSubmit: true,
    CanUnsubmit: true,
    CanReview: true,
    CanEdit: true,
    CanAddEditActions: true,
    CanSubmitActions: true,
    CanClose: true,
    CanDelete: true,
    CanEditClose: true,
    CanAlwaysDelete: true,
  },
  answers: [],
  actions: [],
  reportNumber: "D1612",
  submitterInitials: "CADM",
  submitterEmail: "centraluser@test.user",
  airIdSummary: null,
  functionalCluster: "Airmounts",
  shift: null,
  serviceOrganization: null,
  filePath: null,
  downloadFileURL: null,
  filePathSecond: null,
  filePathThird: null,
  downloadFileUrlSecond: null,
  downloadFileUrlThird: null,
  thirdParty: "",
  SPSverified: 1,
  imagesSetup: "BackgroundImage scale|ProblemImage scale",
  haveBackgroundImage: 0,
  haveProblemImage: 0,
  segment_id: 7,
};
 */
