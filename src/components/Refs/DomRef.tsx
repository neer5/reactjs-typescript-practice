import { useRef, useEffect } from 'react'

export const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!)
  useEffect(() => {
    inputRef.current.focus()
    console.log(inputRef.current.value)
  }, [])
  return (
    <div>
      <input type='text' ref={inputRef} />
    </div>
  )
}
