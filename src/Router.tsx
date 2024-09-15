import { createRoutesFromElements, Route, RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { routePaths } from "./routerConfig";
import HomePage from "./components/Pages/HomePage/HomePage";
import ErrorFallback from "./components/ErrorBoundary/ErrorFallback";
import AppLayout from "./components/AppLayout/AppLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route
        path={routePaths.loginPage.path}
        element={
          <GuestGuard>
            <ErrorBoundary>
              <LoginPage />
            </ErrorBoundary>
          </GuestGuard>
        }
      /> */}
      <Route path={routePaths.home.path} element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path={routePaths.releaseNotes.path} element={<HomePage />} />
        <Route
          path={routePaths.createLearningReport.path}
          element={<HomePage />}
        />
        <Route
          path={routePaths.allLearningReports.path}
          element={<HomePage />}
        />
        <Route path={routePaths.administrators.path} element={<HomePage />} />
        <Route path={routePaths.maintenance.path} element={<HomePage />} />
      </Route>
      <Route path="*" element={<ErrorFallback errorMessage="wrongPath" />} />
    </>
  )
);

const Router = () => <RouterProvider router={router} />;

export default Router;
