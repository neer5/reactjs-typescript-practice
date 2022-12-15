import { ChangeEvent, Component } from "react";

type RadioColorState = {
  backgroundColor: React.CSSProperties['backgroundColor'];
};

type RadioColorProps = RadioColorState;

export class ClassRadioColor extends Component<RadioColorProps, RadioColorState> {
  constructor(props: RadioColorProps) {
    super(props);
    this.state = {
      backgroundColor: props.backgroundColor,
    };
  }
  onChangeColor(event:ChangeEvent<HTMLInputElement>) {
    this.setState({
      backgroundColor: event.target.value
    });
  }
  render() {
    return (
      <>
      <h2>This is class radio color</h2>
      <div>
        <input onChange={event => this.onChangeColor(event)} type="radio" value="green" name="color" /> Green
        <input onChange={event => this.onChangeColor(event)} type="radio" value="yellow" name="color" /> Yellow
        <input onChange={event => this.onChangeColor(event)} type="radio" value="gray" name="color" /> Gray
      </div>
        <div style={{backgroundColor: this.state.backgroundColor}}>CHECK CLASS BACKGROUND COLOR</div>
      </>
    );
  }
}
