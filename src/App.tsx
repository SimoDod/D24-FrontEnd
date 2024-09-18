import Router from "./Router";
import { App as AntApp, Spin } from "antd";
import { useAppSelector } from "./store/store";

const App = () => {
  const isSpinning = useAppSelector((state) => state.loader.fullscreenLoader);

  return (
    <AntApp>
      <Router />
      <Spin size="large" spinning={isSpinning} fullscreen />
    </AntApp>
  );
};

export default App;
