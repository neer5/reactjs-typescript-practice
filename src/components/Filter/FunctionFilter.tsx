import React, { ChangeEvent, useEffect, useState } from "react";
import { Keyed } from "../Fragments/Keyed";
export const FunctionFilter = () => {
  const [itemRes, setItemRes] = useState<
    React.ComponentProps<typeof Keyed>["items"]
  >([]);
  const [items, setItems] = useState(itemRes);
  useEffect(() => {
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
    setItemRes(items);
    setItems(items);
  }, []);
  const search = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value.length > 3) {
      setItems(itemRes.filter((it) => it.name.toLowerCase().includes(value)));
    }
  };
  return (
    <>
      <h2>This is function filter</h2>
      <input type="text" placeholder="Search ..." onChange={search} />
      <br />
      <dl>
        {items.map((item) => (
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
};
