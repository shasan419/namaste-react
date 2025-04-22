import { useState } from "react"

export default function User(props) {
    const [count,setCount] = useState(0);
  return (
    <div className="user-card">
        <h1>Count : {count}</h1>
        <h2>Name: {props.name}</h2>
        <h2>Location: Neral</h2>
        <h2>Contact: @shasan419</h2>
    </div>
  )
}
