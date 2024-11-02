export type Answer = {
  id: number;
  questionNumber: number;
  reportId: number;
  answer: string | number;
  updateNumber: number;
};

export type ReportPermissions = {
  CanSubmit: boolean;
  CanUnsubmit: boolean;
  CanReview: boolean;
  CanEdit: boolean;
  CanClose: boolean;
  CanDelete: boolean;
  CanEditClose: boolean;
  CanAlwaysDelete: boolean;
};

export enum AnswerStatus {
  //TODO to be used translation
  AGREE = "Agree",
  NEUTRAL = "Neutral",
  DISAGREE = "Disagree",
}

export enum ReportStatus {
  NEW = "New",
  SUBMITTED = "Submitted",
  REVIEWED = "Reviewed",
  CLOSED = "Closed",
}

export enum MachineFamily {
  immersionScanner = "Immersion Scanner",
  stepAndScanSystem = "Step-and-Scan System",
  waferStepper = "Wafer Stepper",
  extremeUVSystem = "Extreme UV System",
  directWriteLithography = "Direct Write Lithography",
}

export type Report = {
  id: number;
  reviewersEmail: string[];
  segment: string;
  office: string;
  machineNumber: string;
  timestampCraftsmanship: string | null;
  hoursDelay: string;
  techBucket: string;
  machineFamily: string;
  description: string;
  mealTime: boolean;
  continuousWork: boolean;
  experienced: boolean;
  gotTraining: boolean;
  customerInterference: boolean;
  workAlone: boolean;
  background: string;
  myselInfluence: string;
  riskReduceDescription: string;
  teamInfluence: string;
  managerInfluence: string;
  status: ReportStatus;
  archived: boolean;
  permissions: ReportPermissions;
  answers: Answer[];
  reportNumber: string;
  submitterEmail: string;
  filePath: string | null;
  downloadFileURL: string | null;
  filePathSecond: string | null;
  filePathThird: string | null;
  downloadFileUrlSecond: string | null;
  downloadFileUrlThird: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export type QuestionType = {
  id: number;
  question: string;
  questionGroup: string;
};

export enum NewReportTabKeys {
  GENERAL_INFO = "learningReportPage.generalInfo",
  QUESTIONS = "learningReportPage.questions",
  HUMAN_FACTOR = "learningReportPage.humanFactor",
  ATTACHMENTS = "learningReportPage.attachments",
}
