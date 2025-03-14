import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@styles/index.css";
import { Provider } from "react-redux";
import App from "./App.tsx";
import { store, persistor } from "./store/globalStore.ts";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <App />
      </Provider>
    </PersistGate>
  </StrictMode>,
);
