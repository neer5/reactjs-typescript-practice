import { useState } from "react";

interface ChildProps {
  parentMethod: (a:number) => void;
}

export const FunctionChild = (props: ChildProps) => {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <div>Hello Child Enter Count: </div>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(+e.target.value)}
      />
      <button onClick={() => props.parentMethod(count)}>Submit</button>
    </>
  );
};
