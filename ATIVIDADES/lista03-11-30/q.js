//Resposta 1.1

const respostaApi = {
  id: 101,
  username: "user_a",
  email: "a@ex.com",
  status: "ativo"
};

const { username, email } = respostaApi;

console.log(username); 
console.log(email);    

const { id, ...dadosComplementares } = respostaApi;

console.log(id);
console.log(dadosComplementares);

const configPadrao = { tema: 'dark', notificacoes: true };
const configUsuario = { notificacoes: false };

const configFinal = {
  ...configPadrao,
  ...configUsuario
};

console.log(configFinal);


//Resposta 1.2

function registrarEvento(tipo, ...metadados) {
  console.log("Tipo do evento:", tipo);
  console.log("Metadados:", metadados);
}


registrarEvento("click");

registrarEvento("login", "user_a", "IP 192.168.0.100");

registrarEvento("erro", 500, "Server Error", { retry: true });

//Resposta 1.3

const propsBotao = {
    id: "btn-submit",
    className: "btn-primary",
    onClick: () => {},
    "data-acao": "enviar",
    disabled: true,
    title: "Enviar formulário"
};

function prepararPropsBotao(propriedades) {
    const { id, className, onClick, ...atributosNativos } = propriedades;

    const configuracaoPadrao = {
        id: "default-id",
        type: "button",
        disabled: false
    };

    const propsFinais = {
        ...configuracaoPadrao,
        ...atributosNativos,
        disabled: false
    };

    return propsFinais;
}

const resultado = prepararPropsBotao(propsBotao);
console.log(resultado);

//Resposta 2.1

const configuracoes = {
};

const tempoExpiracaoSeguro = configuracoes.cache?.tempoExpiracao;

console.log(tempoExpiracaoSeguro);

const tempoDaApi = configuracoes.cache?.tempoExpiracao;
const tempoFinal = tempoDaApi ?? 600;

console.log(tempoFinal);

//Resposta 2.2

const dispositivo1 = { info: { bateria: { nivel: 85 } } };
const dispositivo2 = { info: null };
const dispositivo3 = { info: { bateria: { nivel: 0 } } };

const nivel1 = dispositivo1.info?.bateria?.nivel;
const nivel2 = dispositivo2.info?.bateria?.nivel;
const nivel3 = dispositivo3.info?.bateria?.nivel;

const bateria1 = nivel1 ?? -1;
const bateria2 = nivel2 ?? -1;
const bateria3 = nivel3 ?? -1;

console.log("Dispositivo 1:", bateria1); 
console.log("Dispositivo 2:", bateria2); 
console.log("Dispositivo 3:", bateria3); 

/**
 * Dispositivo 2 → -1; info é null, optional Chaining (?.) impede erro e retorna undefined ?? -1 → retorna -1
 * Dispositivo 3 → 0; nivel é 0, e o optional Chaining acessa sem erro 0 ?? -1 → mantém 0, pois 0 não é null nem undefined
 */

//Resposta 3.1

class Usuario {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
  }

  exibirInfo() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Email: ${this.email}`);
  }
}
class Administrador extends Usuario {
  constructor(nome, email, nivelAcesso) {
    super(nome, email); 
    this.nivelAcesso = nivelAcesso;
  }

  exibirInfo() {
    super.exibirInfo(); 
    console.log(`Nível de Acesso: ${this.nivelAcesso}`);
  }
}
const user1 = new Usuario("Ana", "ana@email.com");
const admin1 = new Administrador("Carlos", "carlos@email.com", "super-admin");

console.log("---- Usuário ----");
user1.exibirInfo();

console.log("---- Administrador ----");
admin1.exibirInfo();

// Resposta 3.2

class ContaBancaria {
  #saldo; 

  constructor() {
    this.#saldo = 0; 
  }

  depositar(valor) {
    if (valor > 0) {
      this.#saldo += valor;
    }
  }

  sacar(valor) {
    if (valor <= this.#saldo && valor > 0) {
      this.#saldo -= valor;
    } else {
      console.log("Saldo insuficiente.");
    }
  }

  consultarSaldo() {
    return this.#saldo;
  }
}

const minhaConta = new ContaBancaria();

minhaConta.depositar(500);
minhaConta.sacar(100);

console.log("Saldo atual:", minhaConta.consultarSaldo());
minhaConta.#saldo = 1000;

// Resposta 4.1

/**
 * Para que o sistema de módulos ES6 funcione no navegador, o arquivo JavaScript principal deve ser carregado usando a tag:
 * <script type="module" src="app.js"></script>
 * O atributo type="module" habilita o uso de import e export, garantindo que o navegador trate o arquivo como um módulo JavaScript moderno
 */