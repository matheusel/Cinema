import { useState, useEffect } from 'react';
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

import './style.css'

export default function CriarAdmin() {

    const [selectBanco, setSelectBanco] = useState("")
    const [inputValue, setInputValue] = useState("");
    const [inputValue2, setInputValue2] = useState("");
    const [inputValue3, setInputValue3] = useState("");
    const [inputValue4, setInputValue4] = useState("");
    const [inputValue5, setInputValue5] = useState("");

    const handleBancoEstadoUpdate = (event) => {
        setSelectBanco(event.target.value);
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleInputChange2 = (event) => {
        setInputValue(event.target.value);
    };
    const handleInputChange3 = (event) => {
        setInputValue(event.target.value);
    };
    const handleInputChange4 = (event) => {
        setInputValue(event.target.value);
    };
    const handleInputChange5 = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className='formulario'>
            <div>
                <Box>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Escolha o banco de dados</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectBanco}
                            onChange={handleBancoEstadoUpdate}
                        >
                            <MenuItem value={"movies"}>Movies</MenuItem>
                            <MenuItem value={"tvshows"}>TvShows</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>

            <div>
                {selectBanco === "movies" && (
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="standard-basic" label="Nome" variant="standard" />
                        <TextField id="standard-basic" label="Sinopse" variant="standard" />
                        <TextField id="standard-basic" label="Direção" variant="standard" />
                        <TextField type="number" id="standard-basic" label="Duração" variant="standard" />
                        <TextField id="standard-basic" label="Classificação" variant="standard" />
                        <TextField type="number" id="standard-basic" label="Lançamento" variant="standard" />
                        <TextField id="standard-basic" label="Imagem" variant="standard" />
                        <TextField id="standard-basic" label="Trailer" variant="standard" />
                        <Stack direction="row" spacing={2}>
                            <Button variant="contained" endIcon={<SendIcon />}>
                                Send
                            </Button>
                        </Stack>
                    </Box>
                )}

                {selectBanco === "tvshows" && (
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="standard-basic" label="Nome" variant="standard" />
                        <TextField id="standard-basic" label="Sinopse" variant="standard" />
                        <TextField id="standard-basic" label="Direção" variant="standard" />
                        <TextField type="number" id="standard-basic" label="Temporadas" variant="standard" />
                        <TextField type="number" id="standard-basic" label="Classificação" variant="standard" />
                        <TextField type="number" id="standard-basic" label="Lançamento" variant="standard" />
                        <TextField id="standard-basic" label="Imagem" variant="standard" />
                        <TextField id="standard-basic" label="Trailer" variant="standard" />
                        <Stack direction="row" spacing={2}>
                            <Button variant="contained" endIcon={<SendIcon />}>
                                Send
                            </Button>
                        </Stack>
                    </Box>
                )}
            </div>

        </div>
    );
}