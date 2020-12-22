import React from "react";
import Routes from "./components/routes/indexRoutes";
import axios from "axios";
import { Provider } from "react-redux";
import { configureStore } from "./store/configureStore";
axios.defaults.baseURL = "http://localhost:5000";
const store = configureStore();
function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
