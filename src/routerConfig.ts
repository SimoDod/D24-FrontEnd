export const routePaths = {
  login: { label: "", path: "/login" },
  register: { label: "", path: "/register" },
  home: { label: "sider.home", path: "/" },
  releaseNotes: { label: "sider.releaseNotes", path: "/release-notes" },
  learningReport: {
    label: "sider.learningReport",
    path: "/learning-report/",
    reportNumber: "/learning-report/:reportNumber",
    pathNew: "/learning-report/new",
    new: "new",
  },
  allLearningReports: {
    label: "sider.allLearningReports",
    path: "/all-learning-reports",
  },
  admins: {
    label: "sider.admins",
    path: "/admins",
  },
  maintenance: {
    label: "sider.maintenance",
    path: "/maintenance",
  },
  notFound: {
    path: "/404",
  },
} as const;
