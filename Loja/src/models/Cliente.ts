import { PessoaFisica } from "./PessoaFisica.js";
import { ClienteProps } from "../interfaces/PessoaProps.js";

export class Cliente extends PessoaFisica<ClienteProps>{

    constructor(props: ClienteProps) {
        super(props);
    }

    public get getClienteDesde(): string { return this.props.clienteDesde; }

    public set setClienteDesde(novaData: string) {
        if (novaData.trim().length === 0) {
            console.log("\n ERRO: O campo não pode ser vazio!");
            return;
        }
        this.props.clienteDesde = novaData;
    }

    // Implementação obrigatória do método abstrato (Polimorfismo)
    public exibirPerfil(): void {
        console.log(`[CLIENTE] Nome: ${this.getNome} | Contato: ${this.getTelefone} | Fiel desde: ${this.getClienteDesde}`);
    }
}