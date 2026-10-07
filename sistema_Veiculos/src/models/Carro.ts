import { Veiculo } from "./Veiculo.js";
import { CarroProps } from "../interface/VeiculoProps.js";

export class Carro extends Veiculo<CarroProps> {

    constructor(props: CarroProps) {
        super(props);
    }

    public get getQtdPortas(): number {
        return this.props.qtdPortas;
    }

    public set setQtdPortas(novaQtd: number) {

        if (novaQtd <= 0) {
            console.log("\nERRO: A quantidade de portas deve ser maior que zero!");
            return;
        }

        this.props.qtdPortas = novaQtd;
    }

    // Polimorfismo
    public exibirDados(): void {
        console.log("\n===== CARRO =====");
        console.log(`Placa: ${this.getPlaca}`);
        console.log(`Modelo: ${this.getModelo}`);
        console.log(`Marca: ${this.getMarca}`);
        console.log(`Ano: ${this.getAno}`);
        console.log(`Quantidade de portas: ${this.getQtdPortas}`);
    }
}