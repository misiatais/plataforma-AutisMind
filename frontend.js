
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
        this.conversas = [];
    }

    adicionarConversa(conversa){
        this.conversas.push({
            conversa,
            data: new Date().toUTCString(),
        });
    }

    salvarConversa() {
        console.log(`Conversa "${this.titulo}" foi salva no histórico.`);
      }

      obterHistorico() {
        return this.conversas;
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

class PersonagemPersonalizado extends personagem {
    constructor(id, nome, personalidade) {
      super(id, nome, personalidade);
      this.mapaEmocional = this.definirMapa(personalidade.toLowerCase());
    }
  
    definirMapa(personalidade) {
      let mapas = {
        empatico: {
          ansioso: "Eu sei como isso pode ser difícil. Estou aqui com você, sem pressa. Vamos respirar juntos?",
          triste: "Sinto muito que esteja passando por isso. Quer um abraço virtual?",
          feliz: "Fico genuinamente feliz por você! Isso é maravilhoso.",
          nervoso: "Está tudo bem sentir isso. Vamos encontrar um jeito de aliviar juntos.",
          neutro: "Pode confiar em mim. Me conta o que está sentindo."
        },
        motivador: {
          ansioso: "Você é forte! Respira fundo e segue em frente. Eu acredito em você!",
          triste: "Você já superou momentos difíceis antes. Vai passar, eu prometo.",
          feliz: "É isso! Continue espalhando essa energia!",
          nervoso: "Transforma essa energia em ação! Você consegue virar esse jogo!",
          neutro: "Vamos fazer desse momento algo incrível. Topa o desafio?"
        },
        calmo: {
          ansioso: "Vamos fazer uma pausa juntos. Fecha os olhos e respira fundo comigo.",
          triste: "Às vezes, chorar também é uma forma de se curar. Tô aqui.",
          feliz: "Que sensação boa... vamos apreciar esse momento.",
          nervoso: "Tudo bem. As emoções vêm e vão. Vamos esperar passar, juntinhos.",
          neutro: "Está tudo certo. Me conta com calma o que está acontecendo."
        },
       
        racional: {
          ansioso: "Vamos identificar o que causou isso. Tente lembrar o que estava acontecendo antes.",
          triste: "Talvez registrar esses sentimentos em um diário ajude a clarear as ideias.",
          feliz: "Legal! O que contribuiu pra esse sentimento positivo? Vamos tentar seguir assim!",
          nervoso: "Raiva geralmente vem de frustração. Você consegue identificar a causa?",
          neutro: "Vamos analisar isso juntos. Como você descreveria seu estado atual?"
        }
      };
  
      return mapas[personalidade] || mapas["neutro"];
    }

    detectarEmocao(mensagem) {
        const msg = mensagem.toLowerCase();
    
        if (msg.includes("ansioso") || msg.includes("ansiedade") || msg.includes("preocupado")) {
          return "ansioso";
        } else if (msg.includes("triste") || msg.includes("depressivo") || msg.includes("chateado")) {
          return "triste";
        } else if (msg.includes("feliz") || msg.includes("alegre") || msg.includes("contente")) {
          return "feliz";
        } else if (msg.includes("nervoso") || msg.includes("raiva") || msg.includes("irritado")) {
          return "nervoso";
        } else {
          return "neutro";
        }
      }
    
      interagir(mensagem) {
        const emocao = this.detectarEmocao(mensagem);
        return this.personagemReage(emocao);
      }    
  
    personagemReage(emocao) {
      const resposta = this.mapaEmocional[emocao.toLowerCase()] || this.mapaEmocional.neutro;
      return `${this.nome}: ${resposta}`;
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

    darFeedback(contexto, id_conversa, personagem) {
        const emocao = personagem.detectarEmocao(contexto);
        const conselho = personagem.mapaEmocional[emocao] || personagem.mapaEmocional.neutro;
    
        this.feedback = `Baseado na conversa que tivemos, aqui vai um conselho do ${personagem.nome} para te orientar nessa jornada: ${conselho}`;
        this.contexto = contexto;
        this.id_conversa = id_conversa;
    
        return this.feedback;
      }
}

function mensagemBoasVindas (usuario){
    console.log(`\nSeja bem vindo(a) ao Autismind, ${usuario.username}!`);
    console.log("Estamos aqui para ajudar você a se expressar e se comunicar do seu jeito, no seu tempo.");
    console.log("Vamos começar");
}


mensagemBoasVindas (usuario)
