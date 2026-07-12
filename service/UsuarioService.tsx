import { Projeto } from "@/types";
import axios from "axios";

export const axioInstance = axios.create({
    baseURL:"http://localhost:8080"
})

export class UsuarioService{

    listarTodos() {
        return axioInstance.get("/usuario/listar");
    }

    buscarPorId(id : number) {
        return axioInstance.get("/usuario/buscarPorId/" + id);
    }

    inserir(usuario : Projeto.Usuario) {
        console.log("Enviando para API:", usuario);
        return axioInstance.post("/usuario/salvar", usuario);
    }

    alterar(usuario: Projeto.Usuario) {
        return axioInstance.put("/usuario/alterar", usuario);
    }

    excluir(id : number) {
        return axioInstance.delete("/usuario/deletar/" + id);
    }
}