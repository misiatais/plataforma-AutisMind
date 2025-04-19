class usuario {
    constructor(id, username, senha, email, idade, nivel_comunicacao){
        this.id = id;
        this.username = username;
        this.senha = senha;
        this.email = email;
        this.idade = idade;
        this.nivel_comunicacao = nivel_comunicacao;
    }
}

class historico {
    constructor(id_user, id_conversa, titulo, personagem, data){
        this.id_user = id_user;
        this.id_conversa = id_conversa;
        this.titulo = titulo;
        this.personagem = personagem;
        this.data = data;
    }
}

class personagem {
    constructor(id, nome, personalidade){
        this.id = id;
        this.nome = nome;
        this.personalidade = personalidade;
    }
}
class conversa {
    constructor(id_conversa,detecta_emocao,data,mensagem, id_user, id_personagem){
        this.id_conversa = id_conversa;
        this.detecta_emocao = detecta_emocao;
        this.data = data;
        this.mensagem = mensagem;
        this.id_user = id_user;
        this.id_personagem = id_personagem;
    }
}
class feedback {
    constructor(id_feedback, feedback, contexto, id_conversa){
        this.id_feedback = id_feedback;
        this.feedback = feedback;
        this.contexto = contexto;
        this.id_conversa = id_conversa;
    }
}

function mensagemBoasVindas (usuario){
console.log("\nSeja bem vindo(a) ao Autismind, ${usuario.username}!");
console.log("Estamos aqui para ajudar você a se expressar e se comunicar do seu jeito, no seu tempo.");
console.log("vamos começar");
}

mensagemBoasVindas (usuario)
