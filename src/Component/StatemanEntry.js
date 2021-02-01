import React from 'react'
import { Button } from "antd"

function StatemanEntry() {
  const [count, setcount] = React.useState(0)
  const [inputs, setInput] = React.useState("")

  const increament = () => {
    setcount(count + 1)
  }

  const decreament = () => {
    setcount(count - 1)
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "50px", marginBottom: "40px" }}>
      <div>
        <input placeholder="please put in your number" />
        <Button>Enter</Button>
      </div>
      <div
        style={{
          marginTop: "20px",
          marginBottom: "30px"
        }}

      >{count}</div>
      <div style={{ display: "flex", justifyContent: "space-between", width: "250px", alignItems: "center" }}>
        <Button

          onClick={increament}

        >Increament</Button>
        <Button

          onClick={decreament}
        >Decreament</Button>
      </div>
    </div>
  )
}

export default StatemanEntry
