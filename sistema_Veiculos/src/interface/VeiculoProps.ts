export interface VeiculoProps {
    placa: string;
    modelo: string;
    marca: string;
    ano: number;
}

// Interface do Carro
export interface CarroProps extends VeiculoProps {
    qtdPortas: number;
}

// Interface da Moto
export interface MotoProps extends VeiculoProps {
    cilindradas: number;
}