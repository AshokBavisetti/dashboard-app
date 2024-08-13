import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store"; // Ensure this is the correct path to your store
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
