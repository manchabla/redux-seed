import ReactDOM from 'react-dom';
import { store } from './redux/Storage'
import { fetchDataParsed } from './redux/Reducers/Reducers'
import React, { useState } from 'react';
import image from './assets/img.png'
import pattern from './assets/pattern.png'

import './index.css'

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
    {/* <SayHello />
    <button onClick={loadData}>Click</button>*
    <div>
      <text>{JSON.stringify(count)}</text>
    </div>
    */}

    <div className="hero">
      <div className="info">
        <h1 className="walls">Walls ∞</h1>
        <spam className="walls-info">Te amo</spam>
      </div>
      <div className="img-box">
        <img src={pattern} className="back-img" />
        <img src={image}  className="main-img"/>
      </div>
    </div>
  </>)
}



ReactDOM.render(
  <Component />,
  document.getElementById('root')
);