import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

import Api from '../../service/api';


import './style.css'

export default function CriarAdmin() {

    const { register, handleSubmit } = useForm()

    const addPost = data => Api.post(`/${selectBanco}/criar`, data)

    .then((response) => {
        console.log("deu bom")
    })
    .catch((error) => {
        console.log(error);
        return;
    });

    const [selectBanco, setSelectBanco] = useState("")

    const handleBancoEstadoUpdate = (event) => {
        setSelectBanco(event.target.value);
    }



    return (
        <div className='formulario'>
            <div>
                <Box>
                    <FormControl fullWidth>
                        <InputLabel sx={{ color: "white" }} id="demo-simple-select-label">Escolha o banco de dados</InputLabel>
                        <Select sx={{ color: "white" }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectBanco}
                            onChange={handleBancoEstadoUpdate}
                        >
                            <MenuItem value={"filmes"}>Movies</MenuItem>
                            <MenuItem value={"series"}>TvShows</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>

            <div>
                {selectBanco === "filmes" && (
                    <Box
                        onSubmit={handleSubmit(addPost)}
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField name='nome' {...register("nome")} label="Nome" variant="standard" />
                        <TextField name='sinopse' {...register("sinopse")} label="Sinopse" variant="standard" />
                        <TextField name='direcao' {...register("direcao")} label="Direção" variant="standard" />
                        <TextField name='duracao' {...register("duracao")} type="number" label="Duração" variant="standard" />
                        <TextField name='classificacao' {...register("classificacao")} label="Classificação" variant="standard" />
                        <TextField name='lancamento' {...register("lancamento")} type="text" label="Lançamento" variant="standard" />
                        <TextField name='imagem' {...register("imagem")} label="Imagem" variant="standard" />
                        <TextField name='trailer' {...register("trailer")} label="Trailer" variant="standard" />
                        <TextField name='generos_id' {...register("generos_id")} type="number" label="Gênero" variant="standard" />
                        <Stack direction="row" spacing={2}>
                            <Button type='submit' variant="contained" endIcon={<SendIcon />}>
                                Send
                            </Button>
                        </Stack>
                    </Box>
                )}

                {selectBanco === "series" && (
                    <Box
                        onSubmit={handleSubmit(addPost)}
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField name='nome' {...register("nome")} label="Nome" variant="standard" />
                        <TextField name='sinopse' {...register("sinopse")} label="Sinopse" variant="standard" />
                        <TextField name='direcao' {...register("direcao")} label="Direção" variant="standard" />
                        <TextField name='temporadas' {...register("temporadas")} type="number" label="Temporadas" variant="standard" />
                        <TextField name='classificacao' {...register("classificacao")} type="number" label="Classificação" variant="standard" />
                        <TextField name='lancamento' {...register("lancamento")} type="text" label="Lançamento" variant="standard" />
                        <TextField name='imagem' {...register("imagem")} label="Imagem" variant="standard" />
                        <TextField name='trailer' {...register("trailer")} label="Trailer" variant="standard" />
                        <TextField name='generos_id' {...register("generos_id")} type="number" label="Gênero" variant="standard" />
                        <Stack direction="row" spacing={2}>
                            <Button type='submit' variant="contained" endIcon={<SendIcon />}>
                                Send
                            </Button>
                        </Stack>
                    </Box>
                )}
            </div>

        </div>
    );
}