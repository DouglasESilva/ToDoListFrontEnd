
declare namespace Projeto {

    type Usuario = {
            id?: number;
            nome: string;
            login: string;
            email: string;
            senha: string;
            descricao: string;
    };
    
    type Recurso = {
        id?: number;
        nome: string;
        chave: string;
    };


    type Perfil = {
        id?: number;
        descricao: string;
    }



}