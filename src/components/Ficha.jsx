import { useState } from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { styled } from '@mui/material/styles';
import InfoIcon from '@mui/icons-material/Info';
import { CustomButton } from 'milibreria';
const CustomCard = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),

}));

function Ficha({ animal }) {
    const [count, setCount] = useState(0);
    const article = animal.animal === 'tortuga' ? 'una' : 'un';

    return (
        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={0} sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <Avatar src={animal.imageUrl} sx={{ width: animal.imageSize, height: animal.imageSize }} />
            <CustomCard sx={{ maxWidth: 300, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <CardContent>
                    <Typography variant='h4' component='h2' textAlign="center" gutterBottom>
                        Hola, soy {article} {animal.animal}.
                    </Typography>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <InfoIcon />
                        <Typography variant='h6'>Atributo: {animal.atribute}</Typography>
                    </Stack>
                    <Typography variant='body1' sx={{ marginTop: 1 }}>
                        {animal.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <CustomButton
                        onClick={() => setCount(count + 1)}
                        size='small'
                        text={`Me has hecho: ${count} rascaditas`}
                        txtcolor='white'  
                        bgcolor='red'  
                    >
                        Me has hecho: {count} rascaditas
                    </CustomButton>

                </CardActions>
            </CustomCard>
        </Stack>
    );
}

export default Ficha;
