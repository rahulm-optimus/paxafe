import { useEffect } from 'react'
import './App.css'

function App() {
  const env = import.meta.env.VITE_ENV;

  useEffect(() => {
    console.log(env)
  }, []);

  return (
    <>
    </>
  )
}

export default App
