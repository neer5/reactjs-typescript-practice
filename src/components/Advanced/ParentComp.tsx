import { Component } from 'react'
import PureComp from './PureCom'
import RegComp from './RegComp'
import RegCompCopy from './RegCompCopy'
import { PureCompState } from './types'

class ParentComp extends Component<Record<string, never>, PureCompState> {
  constructor(props: never) {
    super(props)
  
    this.state = {
       name: 'John'
    }
  }
  componentDidMount(): void {
    setInterval(() => {
      // This interval will keep loading even if component is rendered to another component (example: dashboard). but it will not render RegComp again
      // why is set interval prints 2 times in console?
      console.log('****set interval***')
      this.setState({
        name: 'Kal'
      })
    }, 15000)
  }
  render() {
    console.log("================= Parent Comp")
    return (
      <>
      <b>Parent Component</b>
      <PureComp name={this.state.name}/>
      <RegComp name={this.state.name} />
      <RegCompCopy name={this.state.name} />
      </>
    )
  }
}

export default ParentComp