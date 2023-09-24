import { DecimalPipe } from "@angular/common"

export class Cadastro {
    id?: string
    nome: string
    cpf: string
    email: string
    endereco: string
    telefone: string
    saldo: DecimalPipe
}