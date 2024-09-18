export const en = {
  translation: {
    buttons: {
      login: "Login",
      register: "Register",
      backButton: "Go Back",
      save: "Save",
      submit: "Submit",
      unSubmit: "Un-Submit",
      review: "Review",
      unReview: "Un-Review",
      delete: "Delete",
      close: "Close",
    },
    commonWords: {
      new: "New",
      number: "Number",
      text: "Text",
    },
    sider: {
      home: "Home",
      releaseNotes: "Release Notes",
      learningReport: "Learning Report",
      allLearningReports: "All Learning Reports",
      administrators: "Administrators",
      maintenance: "Maintenance",
      reports: "Reports",
      releases: "Releases",
      administration: "Administration",
    },
    learningReportPage: {
      generalInfo: "General Information",
      questions: "Questions",
      humanFactor: "Human Factor",
      attachments: "Attachments",
    },
    loginPage: {
      login: "Login",
      password: "Password",
      email: "Email",
      noAccount: "Don't have an account?",
    },
    registerPage: {
      register: "Register",
      username: "Username",
      email: "Email",
      password: "Password",
      confirmPassword: "Confirm Password",
      alreadyHaveAccount: "Already have an account?",
    },
    errorPage: { wrongPath: "Wrong path." },
    newReportTabs: {
      reportNumber: "Report Number",
      reviewersEmail: "Reviewers Email",
      segment: "Segment",
      soNumber: "SO Number",
      asmlOffice: "ASML Office",
      machineNumber: "Machine Number",
      timestampCraftsmanship: "Date of Craftsmanship",
      hoursDelay: "Hours Delay",
      techBucket: "Tech Bucket",
      machineFamily: "Machine Type",
      description: "Description",
      multipleEmailsTags: "Type email and press enter",
      lhm: "LHM",
    },
    questionsTab: {
      mealTime: "Time for meal",
      continuousWork: "Continuous work over 4h",
      overTwoYears: "Over 2 years with ASML",
      fullyTrained: "Fully trained",
      othersIntefering: "Others interfering",
      workAlone: "Work alone",
    },
    humanFactorTab: {
      background: "Background(cause/context).",
      myselInfluence:
        "Explain how you feel the human factors above played a role in this event.",
      riskReduceDescription:
        "What can you do to reduce the risk of these human factors in the feature?",
      teamInfluence: "What can members of your team do to help?",

      managerInfluence: "What can your manager do to help?",
    },

    errorValidation: {
      usernameAtleastTwoCharacters: "Username should be atleast 2 characters",
      invalidEmail: "Should be a valid email",
      passwordAtleastSixCharacters: "Password should be atleast 6 characters",
      passwordShouldMatch: "Passwords doesn't match",
      required: "Required",
    },
    apiError: {
      unknownError: "Unknown error.",
      invalidCredentials: "Invalid credentials.",
      emailExists: "Email already exists.",
    },
    notifications: {
      allFieldsMandatory: "All fields are mandatory",
      fillBeforeSubmit:
        "Please fill in all the required fields before submitting.",
    },
  },
} as const;
