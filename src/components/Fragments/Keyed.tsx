import React from "react";

type itemListProps = {
  items: {
      id: number;
      name: string;
      code: string;
      model: string;
    }[]
}
export const Keyed = (props: itemListProps) => {
    return (
      <dl>
      {props.items.map(item => (
        // Without the `key`, React will fire a key warning
        <React.Fragment key={item.id}>
          <dt><b>{item.name}</b></dt>
          <dd>Code: {item.code}</dd>
          <dd>Model: {item.model}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
  }
  