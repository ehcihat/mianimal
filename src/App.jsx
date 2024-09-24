import { useState } from 'react'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import './App.css'
import Typography from '@mui/material/Typography';

function App() {
  const [count, setCount] = useState(0)
  const datos = {
    animal: 'mapache',
    imageUrl: '../public/mapache.png',
    imageSize: 300,

  }


  return (
    <>
      <Stack direction= {{xs: 'column', sm: 'column'}} spacing={{xs: 1, sm:1, md: 1}} sx={{justifyContent: 'center', alignItems: 'center',}}>
        
        <Avatar src={datos.imageUrl} sx={{ width: datos.imageSize, height: datos.imageSize }} />

        <Typography variant='h3' component='h2'>Hola, soy yo, {datos.animal}. Eres un crack así que dale click anda:</Typography>

        <Button variant='contained' onClick={() => setCount(count + 1)} size='large' color='secondary'>Me has hecho: {count} rascaditas</Button>
      </Stack>
    </>
  );
}

export default App
