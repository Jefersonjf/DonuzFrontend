import { Component, OnInit } from '@angular/core';
import { Transferencia } from './transferencia.model';
import { Router } from '@angular/router';
import { TransferenciaService } from './../transferencia.service';


@Component({
  selector: 'app-transferencia-create',
  templateUrl: './transferencia-create.component.html',
  styleUrls: ['./transferencia-create.component.css']
})
export class TransferenciaCreateComponent implements OnInit {

  transferencia: Transferencia = new Transferencia();

  constructor(private transferenciaService: TransferenciaService, private router: Router) { }

  ngOnInit(): void {
  }

  async createTransferencia() {
    await this.transferenciaService.create(this.transferencia);
    this.transferenciaService.showMenssage('Transferência realizada com sucesso!');
    this.router.navigate(['/cadastro']);
  }

  cancel() {
    this.router.navigate(['/cadastro']);
  }

}