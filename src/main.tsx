import ReactDOM from "react-dom/client";

import "./design/index.scss";
import { setupStore } from "./store/store";
import { Provider } from "react-redux";
import { App } from "./app";

const store = setupStore();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
