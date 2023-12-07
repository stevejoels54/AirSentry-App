import * as React from "react";
import Navigation from "./src/navigation";
import store from "./src/stateConfig/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
