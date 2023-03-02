import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Api from '../../service/api';
import Typography from '@mui/joy/Typography';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { Rating } from '@mui/material';

import PlayCircleIcon from '@mui/icons-material/PlayCircle';

export default function VisualizarFilmes() {

  const navigate = useNavigate();

  const { id } = useParams();

  const [item, setItem] = useState([]);

  function deleteApi(id) {
    Api
     .delete(`/filmes/deletar/${id}`)
     .then((response) => {
       
     })
     .catch((error) => {
       console.log(error);
       return;
     });
 }

  useEffect(() => {
    async function getApi() {
      await Api
        .get(`/filmes/${id}`)
        .then((response) => {
          setItem(response.data);
        })
        .catch((error) => {
          console.log(error);
          return;
        });
    }

    getApi();
  }, [id]);
  return (
    <div>
      <Container sx={{
        borderRadius: '50px', backgroundColor: 'transparent',
        border: 'solid white', height: 'fit-content', width: '100vh', mx: 'auto', my: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center'
      }}>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent',
          }}
        >
          <Box sx={{ margin: '40px', color: 'white' }}>
            <h1>{item.Nome}</h1>
          </Box>

          <Box sx={{ margin: 'auto' }}>
            <img className='w-50' src={item.imagem}></img>
          </Box>

          <Box sx={{ margin: '30px' }}>
            <Rating size="large" />
          </Box>

          <Typography level="h5" fontSize="lg" textColor="#fff" box-shadow="#0B0C0E" sx={{ margin: '30px' }}>
            {item.direcao}
          </Typography>

          <Typography level="h4" fontSize="lg" textColor="#fff" box-shadow="#0B0C0E" sx={{ margin: '25px' }}>
            {item.duracao}
          </Typography>

          <Typography level="h1" fontSize="lg" textColor="#fff" box-shadow="#0B0C0E" sx={{ margin: '60px' }}>
            {item.sinopse}
          </Typography>

          <Button href={item.trailer} target="_blank" variant="outlined" startIcon={<PlayCircleIcon />}>
            Trailer
            </Button>

          <Box sx={{ margin: '40px' }}>
            <Button sx={{ mx: '20px' }} variant="outlined" startIcon={<DeleteIcon />} onClick={() => {deleteApi(item.id), navigate(-1)}}>
              Delete
            </Button>
            <Button sx={{ mx: '20px' }} variant="contained" endIcon={<EditIcon />}>
              Edit
            </Button>
          </Box>


        </Box>
      </Container>
    </div>
  )
}