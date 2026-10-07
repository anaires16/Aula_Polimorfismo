import { Veiculo } from "./Veiculo.js";
import { MotoProps } from "../interface/VeiculoProps.js";

export class Moto extends Veiculo<MotoProps> {

    constructor(props: MotoProps) {
        super(props);
    }

    public get getCilindradas(): number {
        return this.props.cilindradas;
    }

    public set setCilindradas(novaCilindrada: number) {

        if (novaCilindrada <= 0) {
            console.log("\nERRO: As cilindradas devem ser maiores que zero!");
            return;
        }

        this.props.cilindradas = novaCilindrada;
    }

    // Polimorfismo
    public exibirDados(): void {
        console.log("\n===== MOTO =====");
        console.log(`Placa: ${this.getPlaca}`);
        console.log(`Modelo: ${this.getModelo}`);
        console.log(`Marca: ${this.getMarca}`);
        console.log(`Ano: ${this.getAno}`);
        console.log(`Cilindradas: ${this.getCilindradas} cc`);
    }
}