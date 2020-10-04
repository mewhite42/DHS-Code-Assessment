import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import ResultList from "./components/ResultList";
import ButtonHeader from "./components/ButtonHeader";
import "./App.css";
let data = [];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

function App() {
  return (
    <Provider store={store}>
      <div className="MainBackground">
        <ButtonHeader/>
        <ResultList results={data} />
      </div>
    </Provider>
  );
}


export default App;
