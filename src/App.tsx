import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'

function App() {
  const [num, setNum] = useState(0)
  const handleChange = () => {
    setNum((prev) => prev + 1)
  }
  return (
    <>
      <Button onClick={handleChange}>Click me</Button>
      <div className='text-2xl bg-amber-600'> {num}</div>
    </>
  )
}

export default App
