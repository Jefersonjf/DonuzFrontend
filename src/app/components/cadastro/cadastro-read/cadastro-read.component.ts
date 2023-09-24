import { CadastroService } from './../cadastro.service';
import { Cadastro } from './../cadastro-create/cadastro.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-read',
  templateUrl: './cadastro-read.component.html',
  styleUrls: ['./cadastro-read.component.css']
})
export class CadastroReadComponent implements OnInit {

  cadastros: Cadastro[] = []
  displayedColumns = ['name', 'cpf', 'email', 'saldo', 'action']
  inicializado = false;

  constructor(private cadastroService: CadastroService) { }

  async ngOnInit() {
    await this.buscarCadastros();
    this.inicializado = true
  }

  async buscarCadastros(){    
    const resp =  await this.cadastroService.read()
    this.cadastros = resp.data;
  }

  async deletarCadastro(id: string){    
    const resp =  await this.cadastroService.delete(id)
    await this.buscarCadastros();
    this.cadastroService.showMenssage("Cliente excluido com sucesso!");
  }

}
