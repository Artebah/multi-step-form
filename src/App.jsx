import { Card } from "./components/Card";

import { Provider } from "react-redux";
import { store, persistor } from "./store";

import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <div className="wrapper">
          <div className="container">
            <Card />
          </div>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
