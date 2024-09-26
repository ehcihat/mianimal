import { useState } from 'react'
import Button from '@mui/material/Button';
import Grid2 from '@mui/material/Grid2';
function Appgrid() {
    const [count, setCount] = useState(0)
    const datos = {
        animal: 'mapache',
        imageUrl: '../public/mapache.png',
        imageSize: 300,

    }


    return (
        <>
            <Grid2 display="flex" justifyContent="center" alignItems="center" container spacing={1}>
                <Grid2 size={{ xs: "column", md: 3 }}>
                   <Button variant='contained' fullWidth color= "secondary">Primer botón</Button>
                </Grid2>
                <Grid2 size={{ xs: "column" ,md: 3 }}>
                <Button variant='contained' fullWidth>Segundo botón</Button>
                </Grid2>
                <Grid2 size={{ xs: "column", md: 3 }}>
                <Button variant='contained' fullWidth>Tercer botón</Button>
                </Grid2>
            </Grid2>
        </>
    );
}

export default Appgrid