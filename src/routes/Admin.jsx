import React from "react";
import Card2 from "../components/card2";

const Admin = () => {
    return (
        <div className>
            < Card2 descricao={"Crie um filme/série no banco de dados"} nome={"Criar"} page={"/Admin/criar"} />
            < Card2 descricao={"Atualize um filme/série no banco de dados"} nome={"Atualizar"} page={"/Admin/atualizar"} />
            < Card2 descricao={"Delete um filme/série no banco de dados"} nome={"Deletar"} page={"/Admin/deletar"} />
            < Card2 descricao={"Busque um filme/série no banco de dados"} nome={"Buscar"} page={"/Admin/buscar"} />
        </div>
    )
}

export default Admin