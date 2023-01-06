import { Component, ComponentType } from 'react';
import { CounterState, WithCounterHocProps } from './types';

const withCounterHoc = (WrappedComponent: ComponentType<WithCounterHocProps>, incrementCount: number) => {
  class WithCounterHoc extends Component<WithCounterHocProps, CounterState> {
    constructor(props:WithCounterHocProps) {
      super(props)
    
      this.state = {
         count:0
      }
    }
  incrementCount = () => {
    this.setState(prevState => ({count : prevState.count + incrementCount}))
  }
    render() {
      return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount}  {...this.props}/>;
    }
  }
  return WithCounterHoc;
};

export default withCounterHoc;
