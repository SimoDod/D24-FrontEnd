export const routePaths = {
  home: { label: "sider.home", path: "/" },
  releaseNotes: { label: "sider.releaseNotes", path: "/release-notes" },
  createLearningReport: {
    label: "sider.createLearningReport",
    path: "/create-learning-report",
  },
  allLearningReports: {
    label: "sider.allLearningReports",
    path: "/all-learning-reports",
  },
  administrators: {
    label: "sider.administrators",
    path: "/administrators",
  },
  maintenance: {
    label: "sider.maintenance",
    path: "/maintenance",
  },
} as const;

export type RoutePathEntries = Partial<{
  [K in keyof typeof routePaths]: {
    label: (typeof routePaths)[K]["label"];
    path: (typeof routePaths)[K]["path"];
  };
}>;
