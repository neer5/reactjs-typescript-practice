import { PureComponent } from 'react'
import { PureCompProps } from './types'

class PureComp extends PureComponent<PureCompProps, Record<string, never>> {
  render() {
    console.log("..... Pure Comp")
    return (
      <div>Pure Component {this.props.name}</div>
    )
  }
}

export default PureComp