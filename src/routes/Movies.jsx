import React from "react";
import Card1 from "../components/card";
import Api from "../service/api";
import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';


const Movies = () => {
    const [item, setItem] = useState([]);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        function getApi() {
            Api
                .get(`/filmes`)
                .then((resp) => {
                    const data = resp.data;
                    setLoad(false);
                    setItem(data);
                })
                .catch((error) => {
                    console.log(`A requisição falhou! ${error}`);
                });
        }
        getApi();
    }, []);

    if (load) {
        return (
            <Box sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
        );
    }

    return (
        <>
            {item.length === 0 ? (
                <div>
                    <h2>
                        Não possuimos nenhum filme no momento
                    </h2>
                </div>
            ) : (
                item.map((item) => (
                    <Card1
                        id={`/Movies/${item['id']}`}
                        key={item['id']}
                        nome={item['Nome']}
                        direcao={item['direcao']}
                        trailer={item['trailer']}
                        imagem={item['imagem']}
                    />
                ))

            )}
        </>
    );
}

export default Movies