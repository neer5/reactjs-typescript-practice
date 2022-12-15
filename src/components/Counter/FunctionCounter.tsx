import { useState } from 'react';
export const FunctionCounter = () => {
  const [count, setCount] = useState(0)
  const handleIncrement = () => {
    setCount(count + 1)
  }
  const handleDecrement = () => {
    setCount(count - 1)
  }
    return (
      <>
        <h2>This is function counter</h2>
        <button 
          onClick={handleIncrement}>
          Increment
        </button>
        <button 
          disabled= {count === 0}
          onClick={handleDecrement}>
          Decrement
        </button>
        <br />
        Function Count : {count}
      </>
    );
  }
  