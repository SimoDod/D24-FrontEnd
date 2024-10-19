import { createRoutesFromElements, Route, RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { routePaths } from "./routerConfig";
import HomePage from "./components/Pages/HomePage/HomePage";
import ErrorFallback from "./components/ErrorBoundary/ErrorFallback";
import AppLayout from "./components/AppLayout/AppLayout";
import ReleaseNotesPage from "./components/Pages/ReleaseNotesPage/ReleaseNotesPage";
import LearningReportPage from "./components/Pages/LearningReportPage/LearningReportPage";
import AllLearningReportsPage from "./components/Pages/AllLearningReportsPage/AllLearningReportsPage";
import MaintenancePage from "./components/Pages/MaintenancePage/MaintenancePage";
import LoginPage from "./components/Pages/AuthPages/LoginPage";
import GuestGuard from "./components/AuthControl/GuestGuard";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import AuthGuard from "./components/AuthControl/AuthGuard";
import RegisterPage from "./components/Pages/AuthPages/RegisterPage";
import AdminsPage from "./components/Pages/AdminsPage/AdminsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path={routePaths.login.path}
        element={
          <GuestGuard>
            <ErrorBoundary>
              <LoginPage />
            </ErrorBoundary>
          </GuestGuard>
        }
      />
      <Route
        path={routePaths.register.path}
        element={
          <GuestGuard>
            <ErrorBoundary>
              <RegisterPage />
            </ErrorBoundary>
          </GuestGuard>
        }
      />
      <Route
        element={
          <AuthGuard>
            <ErrorBoundary>
              <AppLayout />
            </ErrorBoundary>
          </AuthGuard>
        }
      >
        <Route index element={<HomePage />} />
        <Route
          path={routePaths.releaseNotes.path}
          element={<ReleaseNotesPage />}
        />
        <Route
          path={routePaths.learningReport.reportNumber}
          element={<LearningReportPage />}
        />
        <Route
          path={routePaths.allLearningReports.path}
          element={<AllLearningReportsPage />}
        />
        <Route
          path={routePaths.admins.path}
          element={<AdminsPage />}
        />
        <Route
          path={routePaths.maintenance.path}
          element={<MaintenancePage />}
        />
      </Route>

      {/* Catch-all for undefined routes */}
      <Route
        path={routePaths.notFound.path}
        element={<ErrorFallback errorMessage="wrongPath" />}
      />
      <Route path="*" element={<ErrorFallback errorMessage="wrongPath" />} />
    </>
  )
);

const Router = () => <RouterProvider router={router} />;

export default Router;
