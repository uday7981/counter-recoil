import { createContext, useContext, useState } from 'react'
import { Button, Card, Typography } from '@mui/material'



const CountContext = createContext();
function App() {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{
      count: count,
      setCount: setCount
    }}>
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
          <CounterComponent />
        </Card>
      </div >
    </CountContext.Provider>


  )
}

function Buttons() {
  return <div style={
    {
      display: "flex",
      justifyContent: "space-between"
    }
  }>

    <Increase />
    <Decrease />


  </div>
}


function Increase() {
  const { count, setCount } = useContext(CountContext)

  return <div>
    <Button variant='contained' onClick={() => {
      setCount(count + 1)
    }}>Increase Counter</Button>

  </div>

}


function Decrease() {
  const { count, setCount } = useContext(CountContext)
  return <div>
    <Button variant='contained' onClick={() => {
      setCount(count - 1)
    }}>Decrease Counter</Button>
  </div>


}


function CounterComponent() {

  const { count } = useContext(CountContext)
  return <div>
    <Typography variant='h5' textAlign={"center"}>
      {count}
    </Typography>

  </div>


}
export default App
