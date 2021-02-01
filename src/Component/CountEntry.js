import React from 'react'
import { Button } from "antd"

function CountEntry() {
  const [input, setInput] = React.useState()
  const [counting, setcounting] = React.useState(false)
  const [show, setahow] = React.useState(false)
  React.useEffect(() => {
    const inputNum = parseInt(input)
    if (counting && inputNum > 0) {
      return setTimeout(() => {
        setInput(inputNum - 1)

      }, 1000)
    } else {
      if (show) {
        alert('your time is up')
        setahow(false)
      }
      setcounting(false)
    }

  }, [counting, input])
  return (
    <div>
      <form>
        <input
          disabled={counting}
          placeholder="Put in your number"
          value={input}
          onChange={(e) => {
            setInput(e.target.value)

          }}
        />
        <Button


          onClick={() => {
            // console.log(input)
            setcounting(true)
            setahow(true)
          }}


        >
          Start
        </Button>

      </form>
    </div>
  )
}

export default CountEntry
