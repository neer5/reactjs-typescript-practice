import { Basic } from "./Basic";
import { Keyed } from "./Keyed";
import { Short } from "./Short";

export const Fragments = () => {
    const items = [{
      id: 1,
      name: "Laptop",
      code: "AS10001",
      model: "ML6001"
    },{
      id: 2,
      name: "Keyboard",
      code: "AS10002",
      model: "ML6002"
    },{
      id: 3,
      name: "Mouse",
      code: "AS10003",
      model: "ML6003"
    }]
    return (
      <>
        <h2>Fragments</h2>
        <Basic />
        <Short />
        <Keyed items={items}/>
      </>
    );
  }
  