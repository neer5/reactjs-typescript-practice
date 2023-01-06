import { Component } from 'react'
import { WithCounterHocProps } from './types'
import withCounterHoc from './withCounterHoc'

export class ButtonCounter extends Component<WithCounterHocProps, never> {
  render() {
    const {count, incrementCount, name } = this.props;
    return (
        <button onClick={incrementCount}>{name} Clicked {count} times</button>
    )
  }
}

export default withCounterHoc(ButtonCounter, 3)