import { VeiculoProps } from "../interface/VeiculoProps";

export abstract class Veiculo<T extends VeiculoProps = VeiculoProps> {

    constructor(protected props: T) {}

    public get getPlaca(): string {
        return this.props.placa;
    }

    public get getModelo(): string {
        return this.props.modelo;
    }

    public get getMarca(): string {
        return this.props.marca;
    }

    public get getAno(): number {
        return this.props.ano;
    }

    public set setPlaca(novaPlaca: string) {
        if (novaPlaca.trim().length === 0) {
            console.log("\nERRO: A placa não pode ser vazia!");
            return;
        }

        this.props.placa = novaPlaca;
    }

    public set setModelo(novoModelo: string) {
        if (novoModelo.trim().length === 0) {
            console.log("\nERRO: O modelo não pode ser vazio!");
            return;
        }

        this.props.modelo = novoModelo;
    }

    public set setMarca(novaMarca: string) {
        if (novaMarca.trim().length === 0) {
            console.log("\nERRO: A marca não pode ser vazia!");
            return;
        }

        this.props.marca = novaMarca;
    }

    public set setAno(novoAno: number) {
        if (novoAno <= 0) {
            console.log("\nERRO: O ano deve ser maior que zero!");
            return;
        }

        this.props.ano = novoAno;
    }

    // Método abstrato
    public abstract exibirDados(): void;
}