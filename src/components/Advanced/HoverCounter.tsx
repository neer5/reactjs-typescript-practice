import { Component } from 'react'
import { WithCounterHocProps } from './types'
import withCounterHoc from './withCounterHoc'

export class HoverCounter extends Component<WithCounterHocProps, never> {
  render() {
    const {count, incrementCount, name } = this.props;
    return (
        <h2 onMouseOver={incrementCount}>{name} Hovered {count} times</h2>
    )
  }
}

export default withCounterHoc(HoverCounter, 5)