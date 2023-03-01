import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Visualizar() {
    return (
        <div>
            <Container sx={{ borderRadius: '50px', backgroundColor: 'transparent', '&:hover' : { backgroundColor: 'white', opacity: [0, 0, 0.9]}, 
            border: 'solid white', height: '80vh', width: '100v%', mx: 'auto', my: '50px', display: 'flex' }}>
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'transparent',
                    }}
                />
            </Container>
        </div>
    )
}