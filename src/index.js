import React from "react";
import ReactDom from "react-dom";

import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './reducers/index.js'

import BoxCon from "./container/box-container.js";

let store = createStore(reducers,applyMiddleware(thunk))

class App extends React.Component {
  render() {
    return (
      <div>
        <BoxCon />
      </div>
    );
  }
}

ReactDom.render(<Provider store={store} > <App /> </Provider>, document.getElementById("root"));
 