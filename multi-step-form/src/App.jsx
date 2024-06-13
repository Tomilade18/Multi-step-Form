import { useState } from 'react'
import './App.css'
import AddOn from './ui/AddOns'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AddOn/>
    </>
  )
}

export default App
