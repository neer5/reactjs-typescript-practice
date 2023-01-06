import { Component } from 'react'
import { PureCompProps } from './types'

class RegCompCopy extends Component<PureCompProps, Record<string, never>> {
  render() {
    console.log("..... Reg Comp copy")
    return (
      <div>Regular Component {this.props.name}</div>
    )
  }
}

export default RegCompCopy