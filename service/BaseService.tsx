import axios from "axios";

export const axioInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL_API
})

export class BaseService{

    url: String;

    constructor(url: String) {
        this.url = url;
    }


    listarTodos() {
        return axioInstance.get(this.url + "/listar");
    }

    buscarPorId(id : number) {
        return axioInstance.get(this.url + "/buscarPorId/" + id);
    }

    inserir(objeto : any) {
        return axioInstance.post(this.url + "/salvar", objeto);
    }

    alterar(objeto: any) {
        return axioInstance.put(this.url + "/alterar", objeto);
    }

    excluir(id : number) {
        return axioInstance.delete(this.url + "/deletar/" + id);
    }


}