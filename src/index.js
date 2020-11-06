import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import dumbReducer from './reducers/dumbReducer'
import Root from './components/Root'
import * as serviceWorker from './serviceWorker';

console.log("dumbReducer");
console.log(dumbReducer);
const store = createStore(dumbReducer,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
render(<Root store={store} />, document.getElementById('root'))

serviceWorker.unregister();
