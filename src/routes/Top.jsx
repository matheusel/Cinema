import React from "react";
import Card1 from "../components/card";

const Top = () => {
    return (
        <>
            <div className="titulo_f">
                <h1>Top 5 Filmes Da Semana:</h1>
            </div>

        <div className="top_filmes">
            
                <Card1 imagem={"https://cinecriticas.com.br/wp-content/uploads/2022/12/Poster.webp"} nome= {"O Menu"}></Card1>
                <Card1 imagem={"https://br.web.img2.acsta.net/pictures/22/05/16/17/59/5165498.jpg"} nome= {"Tudo em Todo o Lugar ao Mesmo Tempo"}></Card1>
                <Card1 imagem={"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnG4iJgDz0T8Paxccxi8h9ewuuhrfkzV6U_obbstxOvuXMEZstXKeV-wuYxg5fHfnvf7Im8-R9Ru1TndnAER24le2T1y6-73Am50PmSj8LyhpyU9CUujk9AqQnshOqLc5eW9oJll4dPPr1Y15gqw2sX8PJKNp2xqypc4rlEOZmfjtxDdp7k_VSE0RLJQ/s2560/Imagem%203.1.jpg"} nome= {"Top Gun: Maverick"}></Card1>
                <Card1 imagem={"https://br.web.img3.acsta.net/pictures/21/07/07/00/23/1802515.jpg"} nome= {"Um Lugar Silencioso 2"}></Card1>
                <Card1 imagem={"https://i0.wp.com/portalrefil.com.br/wp-content/uploads/2022/08/x-a-marca-da-morte-cartaz.jpg?resize=740%2C1110&ssl=1"} nome= {"X: A Marca do Medo"}></Card1>
        </div>

            <div className="titulo_s">
                <h1>Top 5 Séries Da Semana:</h1>
            </div>

        <div className="top_series">
            
                <Card1 imagem={"https://conteudo.imguol.com.br/c/entretenimento/bc/2022/06/22/poster-oficial-de-house-of-the-dragon-1655915054477_v2_3x4.jpg"} nome= {"House of the Dragon"}></Card1>
                <Card1 imagem={"https://br.web.img3.acsta.net/pictures/19/06/18/12/06/4123858.jpg"} nome= {"Euphoria"}></Card1>
                <Card1 imagem={"https://s2.glbimg.com/0SM7NVjYgkaUUYHUsDqedbWDYe0=/0x0:1125x1403/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_5dfbcf92c1a84b20a5da5024d398ff2f/internal_photos/bs/2022/z/y/XpeJnFSyKrcLANanz3zA/you-netflix.jpg"} nome= {"You"}></Card1>
                <Card1 imagem={"https://sm.ign.com/ign_br/screenshot/default/the-mandalorian-poster-pascal-1193420_869m.jpg"} nome= {"The Mandalorian"}></Card1>
                <Card1 imagem={"https://poltronanerd.com.br/wp-content/uploads/2022/12/KA_TLOU_HeroArt_1080x1350_HBOMax_BRA_Organic_PreLaunch.jpg"} nome= {"The Last of Us"}></Card1>
        </div>
        </>
    )
}

export default Top