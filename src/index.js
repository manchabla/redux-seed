import ReactDOM from 'react-dom';
import { store } from './redux/Storage'
import { fetchDataParsed } from './redux/Reducers/Reducers'
import React, { useState } from 'react';


function Component(props) {
  const [count, setCount] = useState("");

  function SayHello() {
    return <p>Hello World</p>
  }

  function loadData() {
    store.dispatch(fetchDataParsed())
    store.subscribe(res => setCount(store.getState()))
  }

  return (<>
    <SayHello />
    <button onClick={loadData}>Click</button>
    <div>
      <text>{JSON.stringify(count)}</text>
    </div>
  </>)
}



ReactDOM.render(
  <Component />,
  document.getElementById('root')
);