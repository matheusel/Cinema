import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

function Card1 () {
  return (
    <Box
      sx={{
        perspective: '1000px',
        transition: 'transform 0.4s',
        '& > div, & > div > div': {
          transition: 'inherit',
        },
        '&:hover': {
          '& > div': {
            transform: 'rotateY(30deg)',
            '& > div:nth-child(2)': {
              transform: 'scaleY(0.9) translate3d(20px, 30px, 40px)',
            },
            '& > div:nth-child(3)': {
              transform: 'translate3d(45px, 50px, 40px)',
            },
          },
        },
      }}
    >
      <Card
        variant="outlined"
        sx={{
          minHeight: '280px',
          width: 250,
          height: 350,
          backgroundColor: 'transparent',
          borderColor: '#000',
        }}
      >
        <Typography level="h2" fontSize="lg" textColor="#000">
          {/* Nome do Filme */}
        </Typography>
        <CardCover
          sx={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
            border: '1px solid',
            borderColor: '#777',
          }}
        >
          <Typography level="h2" fontSize="lg" textColor="#fff">
            <img src='https://upload.wikimedia.org/wikipedia/pt/d/da/Minha_M%C3%A3e_%C3%A9_uma_Pe%C3%A7a.jpg' style={{width: '100%', height: '100%'}}></img>
          </Typography>
        </CardCover>
        <CardContent
          sx={{
            alignItems: 'self-end',
            justifyContent: 'flex-end',
            // background: 'linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3))',
            // border: '1px solid',
            borderColor: '#000'
          }}
        >
          <Typography level="h1" fontSize="lg" textColor="#fff" box-shadow="#0B0C0E" m={3}>
            Nome do Filme
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Card1