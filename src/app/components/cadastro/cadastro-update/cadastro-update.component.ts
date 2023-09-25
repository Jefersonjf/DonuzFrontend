import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cadastro } from '../cadastro-create/cadastro.model';
import { CadastroService } from '../cadastro.service';


@Component({
  selector: 'app-cadastro-update',
  templateUrl: './cadastro-update.component.html',
  styleUrls: ['./cadastro-update.component.css']
})
export class CadastroUpdateComponent implements OnInit {

  cadastro: Cadastro = new Cadastro();

  constructor(
    private cadastroSevices: CadastroService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadCadastro();
  };

  async loadCadastro() {
    const id = this.route.snapshot.paramMap.get('id') as string
    const resp = await this.cadastroSevices.readByid(id);
    this.cadastro = resp.data
  }

  async updateCadastro(cadastro: Cadastro) {
    await this.cadastroSevices.update(cadastro)
    this.cadastroSevices.showMenssage("Cadastro atualizado com sucesso!");
    this.router.navigate(["/cadastro"]);
  };


  cancel() {
    this.router.navigate(['/cadastro'])
  }

}
