import { ContaProps } from "../interface/ContaProps";

export abstract class ContaBancaria<T extends ContaProps = ContaProps> {

    constructor(protected props: T) {}

    public get getNumero(): string {
        return this.props.numero;
    }

    public get getAgencia(): string {
        return this.props.agencia;
    }

    public get getTitular(): string {
        return this.props.titular;
    }

    public get getSaldo(): number {
        return this.props.saldo;
    }

    public sacar(valor: number): void {
        if (valor <= 0) {
            console.log("\nERRO: O valor do saque deve ser maior que zero!");
            return;
        }

        if (valor > this.props.saldo) {
            console.log("\nERRO: Saldo insuficiente!");
            return;
        }

        this.props.saldo -= valor;

        console.log(`\nSaque de R$ ${valor.toFixed(2)} realizado!`);
    }

    public depositar(valor: number): void {
        if (valor <= 0) {
            console.log("\nERRO: O valor do depósito deve ser maior que zero!");
            return;
        }

        this.props.saldo += valor;

        console.log(`\nDepósito de R$ ${valor.toFixed(2)} realizado!`);
    }

    // Método abstrato
    public abstract exibirExtrato(): void;
}