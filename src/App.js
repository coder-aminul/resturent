import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "./components/assets/css/style.css";
import MainComponents from "./components/MainComponents";
import myStore from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={myStore}>
        <BrowserRouter>
          <MainComponents />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
