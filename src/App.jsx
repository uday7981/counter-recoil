import { useState } from 'react'
import { Button, Card, Typography } from '@mui/material'
import {
  RecoilRoot,
  atom,

  useRecoilState,
  useRecoilValue,
} from 'recoil';





function App() {
  const [count, setCount] = useState(0);

  return (
    <RecoilRoot>
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
    </RecoilRoot>


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
  const [count, setCount] = useRecoilState(countState);
  return <div>
    <Button variant='contained' onClick={() => {
      setCount(existingCount => existingCount + 1)
    }}>Increase Counter</Button>

  </div>

}


function Decrease() {
  const [count, setCount] = useRecoilState(countState);
  return <div>
    <Button variant='contained' onClick={() => {
      setCount(existingCount => existingCount - 1)
    }}>Decrease Counter</Button>
  </div>


}


function CounterComponent() {

  const count = useRecoilValue(countState);
  return <div>
    <Typography variant='h5' textAlign={"center"}>
      {count}
    </Typography>

  </div>


}

const countState = atom({
  key: 'countState',
  default: 0,
});
export default App
