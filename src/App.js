import React,{ useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { gsap } from "gsap";

function App() {

  const el = useRef();
  const q = gsap.utils.selector(el);
  
  useEffect(() => {
    
    gsap.to(q(".item"), {
      x: 50,
      stagger: 0.33,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <div className='items' ref={el}>
          <div className='item'>item 1</div>
          <div className='item'>item 2</div>
          <div className='item'>item 3</div>
          <div className='item'>item 4</div>
          <div className='item'>item 5</div>
        </div>
      </div>
    </div>
  );
}

export default App;
