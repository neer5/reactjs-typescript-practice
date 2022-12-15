import { ChangeEvent, Component } from "react";

type FormState = {
  count: number;
};
type ParentProps = {
  parentMethod: Function;
};

export class ClassChild extends Component<ParentProps, FormState> {
  constructor(props: ParentProps) {
    super(props);
    this.state = {
      count: 0
    }
  }
  updateInputCount(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      count: +event.target.value
    });
  }

  click = () => {
    this.props.parentMethod(this.state.count);
  };

  render() {
    return(
      <>
      <div>Hello Child Enter Count: </div>
      <input
      type="number"
      value={this.state.count}
      onChange={event => this.updateInputCount(event)}
      />
    <button 
      onClick={() => this.click()}>
      Submit
    </button>
    </>
    );
  }
}
