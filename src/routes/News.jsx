import React from "react";
import Card3 from "../components/card3";
import { useEffect, useState } from 'react';
import Api from "../service/api";


const News = () => {

    const [item, setItem] = useState([]);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        function getApi() {
            Api
                .get(`/noticias`)
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

    return (
        <div>
            {item.map((item) => (
                <Card3 nome={item.nome} imagem={item.imagem} data={item.data} descricao={item.descricao} autor={item.autor} />
            ))}
        </div>
    )
}

export default News