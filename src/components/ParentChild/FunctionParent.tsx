import { useState } from "react"
import { FunctionChild } from "./FunctionChild"

export const FunctionParent = () => {
const [count, setCount] = useState<number>(0)

const parentFunction = (count: number) => {
  setCount(count)
}

return(
  <>
    <h2>Child calling parent component (Function)</h2>
    <div>Hello Parent, the count received from child is: {count}</div>
    <FunctionChild parentMethod={parentFunction} />
  </>
 )
}