import { Component } from "react";
import { ClassChild } from "./ClassChild";

type FormState = {
  count: number;
};

export class ClassParent extends Component<{}, FormState> {
  constructor(props: never) {
    // Calling super class constructor
    super(props);
    this.reset();
  }

  reset() {
    // Always set the initial state in its own function, so that
    // you can trivially reset your components at any point.
    this.state = {
      count:0
    };
  }

  setCount = (count: number) => {
    this.setState({ count });
  }

  render() {
    return (
      <>
        <h2>Child calling parent component (Class)</h2>
        <div>Hello Parent, the count received from child is: {this.state.count}</div>
        <ClassChild parentMethod={this.setCount} />
      </>
    );
  }
}
