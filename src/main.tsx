import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.module.scss";
import "./localization/i18n";
import "antd/dist/reset.css";
import { ThemeContextProvider } from "./context/ThemeContextProvider.tsx";
import { Provider } from "react-redux";
import reduxStore from "./store/store.ts";

const store = reduxStore();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeContextProvider>
  </StrictMode>
);
