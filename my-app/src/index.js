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
  const [counter, setConter] = useState(0)
  const changeConter = (i) => {
    if (counter <= -50 || counter >= 50) {
      return
    }
    setConter(counter => counter + i)
  }
  const rndCounter = () => {
    let random = Math.floor((Math.random() * 101) - 50);
    setConter(random)
  }
  const resetCounter = () => {
    setConter(0)
  }
  return (
    <div className='app'>
      <div className='counter'>{counter}</div>
      <div className='controls'>
        <button onClick={() => changeConter(1)}>INC</button>
        <button onClick={() => changeConter(-1)}>DEC</button>
        <button onClick={rndCounter}>RND</button>
        <button onClick={resetCounter}>RESET</button>
      </div>
    </div>
  )
}


// ReactDOM.render(<App counter={0}/>, document.getElementById('app'));

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App counter={0}/>
    <App2/>
  </React.StrictMode>
);