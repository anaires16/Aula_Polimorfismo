import { ContaBancaria } from "./ContaBancaria.js";
import { ContaCorrenteProps } from "../interface/ContaProps.js";

export class ContaCorrente extends ContaBancaria<ContaCorrenteProps> {

    constructor(props: ContaCorrenteProps) {
        super(props);
    }

    public get getLimite(): number {
        return this.props.limite;
    }

    public sacar(valor: number): void {

        if (valor <= 0) {
            console.log("\nERRO: O valor do saque deve ser maior que zero!");
            return;
        }

        // Pode utilizar o limite
        if (valor > this.props.saldo + this.props.limite) {
            console.log("\nERRO: Saldo + limite insuficiente!");
            return;
        }

        this.props.saldo -= valor;

        console.log(
            `\nSaque de R$ ${valor.toFixed(2)} realizado na Conta Corrente!`
        );
    }

    // Polimorfismo
    public exibirExtrato(): void {
        console.log("\n===== EXTRATO CONTA CORRENTE =====");
        console.log(`Número: ${this.getNumero}`);
        console.log(`Agência: ${this.getAgencia}`);
        console.log(`Titular: ${this.getTitular}`);
        console.log(`Saldo: R$ ${this.getSaldo.toFixed(2)}`);
        console.log(`Limite: R$ ${this.getLimite.toFixed(2)}`);
    }
}