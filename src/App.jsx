import { useState } from 'react'
import { Button, Card, Typography } from '@mui/material'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center"

      }} >

      <Card style={{
        padding: 20,
        width: 500
      }}>
        < Typography variant='h5' display={"flex"} justifyContent={"center"}>Welcome to the counter game</Typography>


        <br />
        <Buttons />
        {/* <CounterComponent /> */}
      </Card>
    </div >


  )
}

function Buttons({ count, setCount }) {
  return <div style={
    {
      display: "flex",
      justifyContent: "space-between"
    }
  }>

    <Increase count={count} setCount={setCount} />
    <Decrease count={count} setCount={setCount} />


  </div>
}


function Increase(count, setCount) {

  return <div>
    <Button variant='contained' onClick={() => {
      setCount(count + 1)
    }}>Increase Counter</Button>

  </div>

}


function Decrease(count, setCount) {
  return <div>
    <Button variant='contained' onClick={() => {
      setCount(count - 1)
    }}>Decrease Counter</Button>
  </div>


}


function CounterComponent() {


}
export default App
