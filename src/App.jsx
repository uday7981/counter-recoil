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
        < Typography varint='h5'>Welcome to the counter game</Typography>
        <br />
      </Card>
    </div >

  )
}

export default App
