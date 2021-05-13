import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

import CatFact from "./components/BA";
import { appReducer } from "./reducers/reducers";
import thunk from "redux-thunk";


const store = createStore(appReducer, applyMiddleware(logger, thunk));

function App() {
  return (
    <div className="App">
      <CatFact />
    </div>
  );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
