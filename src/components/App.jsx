import { useState } from 'react'
import Ficha from './Ficha.jsx'
import FormRegister from './FormRegister.jsx'
import './App.css' 


function App() {
  const [count, setCount] = useState(0)
  const datos = {
    animal: 'mapache',
    imageUrl: '../public/mapache.png',
    imageSize: 300,

  }


  return (
    <>
      <Ficha/>
      <FormRegister/>
      </>
  );
}

export default App
