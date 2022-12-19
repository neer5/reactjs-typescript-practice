import { Component } from "react";

type CounterState = {
  count: number;
  
};

export class ClassCounter extends Component<Record<string, never>, CounterState> {
  constructor(props: never) {
    // Calling super class constructor
    super(props);
    this.reset();
  }

  reset() {
    // Always set the initial state in its own function, so that
    // you can trivially reset your components at any point.
    this.state = {
      count: 0
    };
  }

  decrementValue() {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  }

  incrementValue() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  resetCounter() {
    this.reset();
    this.setState(this.state);
  }

  render() {
    return (
      <>
        <h2>This is class counter</h2>
        <button 
          onClick={() => this.incrementValue()}>
          Increment
        </button>
        <button 
          disabled= {this.state.count === 0}
          onClick={() => this.decrementValue()}>
          Decrement
        </button>
        <br />
        Class Count : {this.state.count}
      </>
    );
  }
}
