import { Funcionario } from "./src/models/Funcionario.js";
import { Cliente } from "./src/models/Cliente.js";
import { PessoaFisica } from "./src/models/PessoaFisica.js";

console.log("=== SISTEMA DA LOJA ===");

const funcionario = new Funcionario({
    cpf: "111.222.333-44",
    nome: "Carlos Silva",
    telefone: "11999999999",
    email: "carlos@email.com",
    dataNascimento: "1990-05-15",
    registro: "REG-1234",
    carteiraTrabalho: "CTPS-9876",
    pis: "PIS-5555"
});

const cliente = new Cliente({
    cpf: "999.888.777-66",
    nome: "Ana Souza",
    telefone: "11888888888",
    email: "ana@email.com",
    dataNascimento: "1995-10-20",
    clienteDesde: "2023-01-10"
});

console.log("\n--- DEMONSTRAÇÃO DE POLIMORFISMO ---");

// Array tipado com a Classe Abstrata recebe as subclasses
const bancoDeDados: PessoaFisica[] = [funcionario, cliente];

// O polimorfismo em ação: O mesmo método se comporta diferente para cada objeto
for (const pessoa of bancoDeDados) {
    pessoa.exibirPerfil();
}
