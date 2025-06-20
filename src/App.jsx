import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Qrcode from './component/Qrcode'
import './component/Qrcode.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 

      <Qrcode/>
    </>
  )
}

export default App
