import React from "react";
import Routes from "./components/routes/indexRoutes";
import axios from "axios";
import { Provider } from "react-redux";
import { configureStore } from "./store/configureStore";
axios.defaults.baseURL = "https://quickss-backend.herokuapp.com";
// axios.defaults.baseURL = "http://192.168.43.187:3000";
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
