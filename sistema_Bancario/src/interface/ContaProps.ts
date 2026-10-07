// Interface base
export interface ContaProps {
    numero: string;
    agencia: string;
    titular: string;
    saldo: number;
}

// Interface da Conta Corrente
export interface ContaCorrenteProps extends ContaProps {
    limite: number;
}

// Interface da Conta Poupança
export interface ContaPoupancaProps extends ContaProps {
    taxaAniversario: number;
}