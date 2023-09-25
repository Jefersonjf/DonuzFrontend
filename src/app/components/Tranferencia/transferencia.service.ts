import { Injectable } from "@angular/core";
import axios, { AxiosError } from 'axios';
import { Transferencia } from "./transferencia-create/transferencia.model";
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';



@Injectable({
    providedIn: 'root'
  })
  export class TransferenciaService {
  
    baseUrl = "https://localhost:7106/api/v1/Transacao"
    
  
    constructor(private snackBar: MatSnackBar, private http: HttpClient) {
      this.addInterceptors();
    }
  
    addInterceptors(){
      
      axios.interceptors.response.use(
        
        success => success,
        
        (error: AxiosError) => {
          this.showMenssage(error.response?.data as string ?? 'Erro de comunicação')
          throw error;
        } 
      )
    }
  
    showMenssage(msg: string): void {
      this.snackBar.open(msg, '', {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      })
    }
  
    async create(transferencia: Transferencia) {
      const resp = await axios.post<Transferencia>(this.baseUrl, transferencia)
      return resp;
    }
  
    async read() {
      const resp = await axios.get<Transferencia[]>(this.baseUrl)
      return resp;
    }
  
    async readBycpf(cpf: string) {
      const url = `${this.baseUrl}/${cpf}`
      const resp = await axios.get<Transferencia>(url)
      return resp;
    }    

}