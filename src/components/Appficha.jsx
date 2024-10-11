import { useState } from 'react';
import Ficha from './Ficha.jsx';
import List from '@mui/material/List';

function Appgrid() {
    const animals = [{
        id: 0,
        animal: 'gato',
        atribute: 'feliz',
        imageUrl: '/gato.jpg', 
        imageSize: 150,
        description: 'Pues es un gato',
    },
    {
        id: 1,
        animal: 'perro',
        atribute: 'bello',
        imageUrl: '/perro.jpg', 
        imageSize: 150,
        description: 'Pues es un perro',
    },
    {
        id: 2,
        animal: 'loro',
        atribute: 'hablador',
        imageUrl: '/loro.jpg', 
        imageSize: 150,
        description: 'Pues es un loro',
    },
    {
        id: 3,
        animal: 'tortuga',
        atribute: 'perezosa',
        imageUrl: '/tortuga.jpg', 
        imageSize: 150,
        description: 'Pues es una tortuga',
    }];

    return (
        <>
            <List>
                {animals.map((animal) => (
                    <Ficha key={animal.id} animal={animal} /> 
                ))}
            </List>
        </>
    );
}

export default Appgrid;
