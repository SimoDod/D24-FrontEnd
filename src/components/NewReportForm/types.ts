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
  CanAddEditActions: boolean;
  CanSubmitActions: boolean;
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

export enum Segments {
  SEGMENT1 = "Segment 1",
  SEGMENT2 = "Segment 2",
  SEGMENT3 = "Segment 3",
}

export enum AsmlOffices {
  asmlOffice1 = "ASML Office 1",
  asmlOffice2 = "ASML Office 2",
  asmlOffice3 = "ASML Office 3",
}

export enum TechBuckets {
  techBucket1 = "Tech Bucket 1",
  techBucket2 = "Tech Bucket 2",
  techBucket3 = "Tech Bucket 3",
}

export enum MachineFamily {
  machine1 = "Machine 1",
  machine2 = "Machine 2",
  machine3 = "Machine 3",
}

export type Report = {
  id: number;
  reviewersEmail: string[];
  segment: string;
  soNumber: string;
  asmlOffice: string;
  machineNumber: string;
  timestampCraftsmanship: string;
  hoursDelay: string;
  lhm: string;
  coachProcedure: string;
  techBucket: string;
  machineFamily: string;
  description: string;
  dateCreated: string;
  dateLastUpdated: string;
  dateSubmitted: string;
  dateReviewed: string;
  dateClosed: string | null;
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
  userMail: string;
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
  segment_id: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export type QuestionType = {
  id: number;
  question: string;
  questionGroup: string;
};
