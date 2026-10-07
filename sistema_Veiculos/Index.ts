import { Veiculo } from "./src/models/Veiculo.js";
import { Carro } from "./src/models/Carro.js";
import { Moto } from "./src/models/Moto.js";

console.log("=================================");
console.log("      SISTEMA DE VEÍCULOS");
console.log("=================================");

// Criando um carro
const carro = new Carro({
    placa: "ABC-1234",
    modelo: "Civic",
    marca: "Honda",
    ano: 2024,
    qtdPortas: 4
});

// Criando uma moto
const moto = new Moto({
    placa: "XYZ-5678",
    modelo: "CG 160",
    marca: "Honda",
    ano: 2023,
    cilindradas: 160
});

// Array usando a classe abstrata
const veiculos: Veiculo[] = [
    carro,
    moto
];

console.log("\n=================================");
console.log("        DADOS DOS VEÍCULOS");
console.log("=================================");

// Polimorfismo
for (const veiculo of veiculos) {
    veiculo.exibirDados();
}