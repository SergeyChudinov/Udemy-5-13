import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.counter
    }
  }
  incCounter = () => {
    if (this.state.counter >= 50) {
      return;
    }
    this.setState(state => ({
      counter: state.counter + 1
    }))
  }
  decCounter = () => {
      if (this.state.counter <= -50) {
        return;
      }
    this.setState(state => ({
      counter: state.counter - 1
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
          <button onClick={this.incCounter}>INC</button>
          <button onClick={this.decCounter}>DEC</button>
          <button onClick={this.rndCounter}>RND</button>
          <button onClick={this.resetCounter}>RESET</button>
        </div>
      </div>
    )
  }
}



// ReactDOM.render(<App counter={0}/>, document.getElementById('app'));

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App counter={0}/>
  </React.StrictMode>
);