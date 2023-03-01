import React from "react";
import Card3 from "../components/card3";

const News = () => {
    return (
        <div>
            <Card3 nome={"Marvel está falindo" } imagem={"https://t.ctcdn.com.br/l3Wzr32EvA0p74U3N-MH-L2VH7I=/400x400/smart/filters:format(webp)/i490060.jpeg"} data="2023-02-28" descricao={"Marvel está sem dinheiro e DC passa na frente dando rasteira"} autor={"Prime"} />
            <Card3 nome={"DC está falindo" } imagem={"https://poltronanerd.com.br/wp-content/uploads/2020/05/Screenshot_2020-05-13-The-History-Of-The-DC-Comics-Logo.png"} data="2023-02-28" descricao={"DC está sem dinheiro e Marval passa na frente dando rasteira"} autor={"Prime"} />
        </div>
    )
}

export default News