import { Component } from 'react'
import { PureCompProps } from './types'

class RegComp extends Component<PureCompProps, Record<string, never>> {
  render() {
    console.log("..... Reg Comp")
    return (
      <div>Regular Component {this.props.name}</div>
    )
  }
}

export default RegComp