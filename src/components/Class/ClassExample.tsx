import { ChangeEvent, Component, MouseEvent } from "react";

type FormProps = {
  message: string;
};
type FormState = {
  name: string;
  showMessage: string;
  
};

export class ClassExample extends Component<FormProps, FormState> {
  constructor(props: FormProps) {
    // Calling super class constructor
    super(props);
    this.reset();
  }

  reset() {
    // Always set the initial state in its own function, so that
    // you can trivially reset your components at any point.
    this.state = {
      name: '',
      showMessage: ''
    };
  }

  updateInputValue(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      name: event.target.value
    });
  }

  showInputValue() {
    this.setState({
      showMessage: this.state.name ? `Name Entered is: ${this.state.name}` : ""
    });
  }

  resetInputValue() {
    this.reset();
    this.setState(this.state);
  }

  render() {
    return (
      <div>
        <h2>{this.props.message}</h2>
        Name:
        <input
          type="text"
          value={this.state.name}
          onChange={event => this.updateInputValue(event)}
        />
        <button 
          onClick={() => this.showInputValue()}>
          Submit
        </button>
        <button 
          onClick={() => this.resetInputValue()}>
          Reset
        </button>
        <br />
        {this.state.showMessage}
      </div>
    );
  }
}
