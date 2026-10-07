import { ContaBancaria } from "./ContaBancaria.js";
import { ContaPoupancaProps } from "../interface/ContaProps.js";

export class ContaPoupanca extends ContaBancaria<ContaPoupancaProps> {

    constructor(props: ContaPoupancaProps) {
        super(props);
    }

    public get getTaxaAniversario(): number {
        return this.props.taxaAniversario;
    }

    public renderJuros(): void {

        const juros = this.props.saldo *
            (this.props.taxaAniversario / 100);

        this.props.saldo += juros;

        console.log(
            `\nJuros de R$ ${juros.toFixed(2)} adicionados ao saldo!`
        );
    }

    // Polimorfismo
    public exibirExtrato(): void {
        console.log("\n===== EXTRATO CONTA POUPANÇA =====");
        console.log(`Número: ${this.getNumero}`);
        console.log(`Agência: ${this.getAgencia}`);
        console.log(`Titular: ${this.getTitular}`);
        console.log(`Saldo: R$ ${this.getSaldo.toFixed(2)}`);
        console.log(`Taxa aniversário: ${this.getTaxaAniversario}%`);
    }
}