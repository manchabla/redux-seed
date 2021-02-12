import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './redux/Storage'
import { fetchDataParsed } from './redux/Reducers/Reducers'

function SayHello() {
  return <p>Hello World</p>
}

function loadData() {
  //  Triggering event
  store.dispatch(fetchDataParsed())
  //  Show data in console
  store.subscribe(res => console.log(store.getState()))
}

ReactDOM.render(
  <React.StrictMode>
    <SayHello />
    <button onClick={loadData}>Click</button>
  </React.StrictMode>,
  document.getElementById('root')
);