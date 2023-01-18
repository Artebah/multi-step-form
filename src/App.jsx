import { Card } from "./components/Card";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <div className="container">
          <Card />
        </div>
      </div>
    </Provider>
  );
}

export default App;
