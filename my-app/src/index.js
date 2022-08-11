import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useState } from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.counter
    }
  }
  changeConter = (i) => {
    if (this.state.counter <= -50 || this.state.counter >= 50) {
      return;
    }
    this.setState(state => ({
      counter: state.counter + i
    }))
  }
  rndCounter = () => {
    let random = Math.floor((Math.random() * 101) - 50);
    this.setState(state => ({
      counter: random
    }))
  }
  resetCounter = () => {
    this.setState(state => ({
      counter: this.props.counter
    }))
  }
  render() {
    return (
      <div className='app'>
        <div className='counter'>{this.state.counter}</div>
        <div className='controls'>
          <button onClick={() => this.changeConter(1)}>INC</button>
          <button onClick={() => this.changeConter(-1)}>DEC</button>
          <button onClick={this.rndCounter}>RND</button>
          <button onClick={this.resetCounter}>RESET</button>
        </div>
      </div>
    )
  }
}

const App2 = (props) => {
  const [counter, setCounter] = useState(0)
  const changeCounter = (i) => {
    if (counter <= -50 || counter >= 50) {
      return
    }
    setCounter(counter => counter + i)
  }
  const rndCounter = () => {
    let random = Math.floor((Math.random() * 101) - 50);
    setCounter(random)
  }
  const resetCounter = () => {
    setCounter(0)
  }
  return (
    <div className='app'>
      <div className='counter'>{counter}</div>
      <div className='controls'>
        <button onClick={() => changeCounter(1)}>INC</button>
        <button onClick={() => changeCounter(-1)}>DEC</button>
        <button onClick={rndCounter}>RND</button>
        <button onClick={resetCounter}>RESET</button>
      </div>
    </div>
  )
}

function useCounter(initial) {
  const [counter, setCounter] = React.useState(initial);

  // Это вариант с запросом, чтобы он нормально работал после активации - уберите все props,
  // которые приходят в компонент + аргумент initial поменяйте на 0 или null

  React.useEffect(() => {
      fetch('https://www.random.org/integers/?num=1&min=-50&max=50&col=1&base=10&format=plain&rnd=new')
          .then(res => res.text())
          .then(res => setCounter(res))
          .catch(err => console.log(err))
  }, [])
  const incCounter = () => {
    if (counter < 50) {
      setCounter(counter => counter + 1)
    }
  } 
  const decCounter = () => {
    if (counter > -50) {
      setCounter(counter => counter - 1)
    }
  }
  const rndCounter = () => {
    setCounter(+(Math.random() * (50 - -50) + -50).toFixed(0))
  }
  const resetCounter = () => {
    setCounter(initial)
  }
  return {
    counter,
    incCounter,
    decCounter,
    rndCounter,
    resetCounter
  }
}
const Counter = (props) => {
  const {counter, incCounter, decCounter, rndCounter, resetCounter} = useCounter(0);

  return (
    <div className="app">
      <div className="counter">{counter}</div>
      <div className="controls">
        <button onClick={incCounter}>INC</button>
        <button onClick={decCounter}>DEC</button>
        <button onClick={rndCounter}>RND</button>
        <button onClick={resetCounter}>RESET</button>
      </div>
    </div>
  )
}
const RndCounter = (props) => {
  const {counter, rndCounter, resetCounter} = useCounter(0);
  return (
    <div className="app">
      <div className="counter">{counter}</div>
      <div className="controls">
        <button onClick={rndCounter}>RND</button>
        <button onClick={resetCounter}>RESET</button>
      </div>
    </div>
  )
}

const App3 = () => { // counter={0} counter={5}
  return (
      <>
          <Counter/>
          <RndCounter/> 
      </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    {/* <App counter={0}/>
    <App2/> */}
    <App3/>
  </React.StrictMode>
);