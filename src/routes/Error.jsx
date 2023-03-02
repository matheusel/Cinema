import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { purple } from '@mui/material/colors';

const Error = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                minHeight: '100vh',
                backgroundColor: "#161F30",
            }}
        >
            <Typography variant="h1" style={{ color: 'white' }}>
                404
            </Typography>
            <Typography variant="h6" style={{ color: 'white' }}>
                The page you’re looking for doesn’t exist.
            </Typography>
            <Button variant="contained" href='/'>Back Home</Button>
        </Box>
    )
}

export default Error