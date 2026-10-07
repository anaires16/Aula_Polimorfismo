import { ContaBancaria } from "./src/models/ContaBancaria.js";
import { ContaCorrente } from "./src/models/ContaCorrente.js";
import { ContaPoupanca } from "./src/models/ContaPoupanca.js";

console.log("=================================");
console.log("       SISTEMA BANCÁRIO");
console.log("=================================");

// Criando uma Conta Corrente
const contaCorrente = new ContaCorrente({
    numero: "001234",
    agencia: "0001",
    titular: "Carlos Silva",
    saldo: 1500,
    limite: 1000
});

// Criando uma Conta Poupança
const contaPoupanca = new ContaPoupanca({
    numero: "005678",
    agencia: "0001",
    titular: "Ana Souza",
    saldo: 3000,
    taxaAniversario: 0.5
});

// Operações
contaCorrente.depositar(500);
contaCorrente.sacar(300);

contaPoupanca.depositar(1000);
contaPoupanca.renderJuros();

// Array usando a classe abstrata
const contas: ContaBancaria[] = [
    contaCorrente,
    contaPoupanca
];

console.log("\n=================================");
console.log("       EXTRATOS");
console.log("=================================");

// Polimorfismo
for (const conta of contas) {
    conta.exibirExtrato();
}