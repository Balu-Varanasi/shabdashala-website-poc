import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    console.log('it will get called always');
  });

  useEffect(() => {
    console.log('counter1');
  }, [counter]);

  useEffect(() => {
    console.log('counter2');
  }, [counter2]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          counter 1: { counter }
        </p>
        <p>counter 2: { counter2 }</p>
        <button onClick={() => setCounter(counter + 1)}>increment counter1</button>
        <button onClick={() => setCounter2(counter2 + 1)}>increment counter2</button>
      </header>
    </div>
  );
}

export default App;
