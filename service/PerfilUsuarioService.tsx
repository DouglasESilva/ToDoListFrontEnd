import axios from "axios";
import { BaseService } from "./BaseService";

// export const axioInstance = axios.create({
//     baseURL:"http://localhost:8080"
// })

export class PerfilUsuarioService extends BaseService{

    constructor() {
        super("/perfil-usuario");
    }
}