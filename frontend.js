
class usuario {
    constructor(id, username, senha, email, idade, nivel_comunicacao){
        this.id = id;
        this.username = username;
        this.senha = senha;
        this.email = email;
        this.idade = idade;
        this.nivel_comunicacao = nivel_comunicacao;
    }
    exibirPerfil(){
        return `Usuario: ${this.username} | Idade : ${this.idade} | Comunicação: ${this.nivel_comunicacao}`
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
    interagir(mensagem){
        const msg = mensagem.toLowerCase();

        if (msg.includes("ansioso") || msg.includes("ansiedade")) {
            return `${this.nome}: Sinto muito por saber disso. Quer conversar sobre o que está te deixando assim?`;
        } else if (msg.includes("feliz") || msg.includes("alegre")) {
            return `${this.nome}: Que bom saber disso! Fico feliz por você. Quer me contar o que deixou seu dia melhor?`;
        } else if (msg.includes("triste") || msg.includes("chateado")) {
            return `${this.nome}: Poxa... às vezes tudo parece difícil mesmo. Mas estou aqui pra ouvir você.`;
        } else if (msg.includes("nervoso") || msg.includes("raiva")) {
            return `${this.nome}: Entendo... respirar fundo ajuda. Quer me contar o que aconteceu?`;
        } else {
            return `${this.nome}: Entendi. Me conta mais sobre isso, quero te ouvir.`;
        }
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
    console.log(`\nSeja bem vindo(a) ao Autismind, ${usuario.username}!`);
    console.log("Estamos aqui para ajudar você a se expressar e se comunicar do seu jeito, no seu tempo.");
    console.log("Vamos começar");
}


mensagemBoasVindas (usuario)
}
