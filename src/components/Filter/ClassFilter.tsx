import React, { ChangeEvent, Component } from "react";
import { Keyed } from "../Fragments/Keyed";

type FilterState = {
  items: React.ComponentProps<typeof Keyed>["items"];
  itemRes: React.ComponentProps<typeof Keyed>["items"];
  searchString: string;
};

export class ClassFilter extends Component<Record<string, never>, FilterState> {
  constructor(props: never) {
    // Calling super class constructor
    super(props);
    this.state = {
      items: [],
      itemRes: [],
      searchString: ""
    }
  }

  search(event: ChangeEvent<HTMLInputElement>) {
    const {name, value} = event.target;
    // this.setState({[name]: value});
    if(value.length > 3){
      const items = this.state.itemRes;
      this.setState({
        items: items.filter(it => it.name.toLowerCase().includes(value)),
        searchString: value
      });
    }
    else{
      this.setState({
        searchString: value
      });
    }
  }

  getData(){
    const items = [
      {
        id: 1,
        name: "Laptop",
        code: "AS10001",
        model: "ML6001",
      },
      {
        id: 2,
        name: "Keyboard",
        code: "AS10002",
        model: "ML6002",
      },
      {
        id: 3,
        name: "Mouse",
        code: "AS10003",
        model: "ML6003",
      },
    ];
    this.setState({
      items,
      itemRes: items
    })
  }

  componentDidMount(){
    this.getData();
  }

  render() {
    return (
      <>
        <h2>This is class filter</h2>
        <input type="text" placeholder="Search ..." name="searchString" value={this.state.searchString} onChange={event => this.search(event)} />
        <br />
        <dl>
          {this.state.items.map((item) => (
            // Without the `key`, React will fire a key warning
            <React.Fragment key={item.id}>
              <dt>
                <b>{item.name}</b>
              </dt>
              <dd>Code: {item.code}</dd>
              <dd>Model: {item.model}</dd>
            </React.Fragment>
          ))}
        </dl>
      </>
    );
  }
}
