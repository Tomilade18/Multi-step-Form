import { useState } from 'react'
import './App.css'
import AddOn from './ui/AddOns'
import PersonalInfo from './ui/PersonalInfo'
import Plan from './ui/Plan'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <AddOn/>
    <PersonalInfo/> */}
    <Plan/>
    </>
  )
}

export default App
