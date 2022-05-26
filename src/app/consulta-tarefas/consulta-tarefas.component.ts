import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../models/tarefa.model';
import { TarefasService } from '../services/tarefas.service';

@Component({
  selector: 'app-consulta-tarefas',
  templateUrl: './consulta-tarefas.component.html',
  styleUrls: ['./consulta-tarefas.component.css']
})
export class ConsultaTarefasComponent implements OnInit {
  //atributo para armazenar o numero da pagina que o usuario estiver navegando na paginação
  page = 1;

  //metodo construtor utilizado para inicializar
  //os serviços que o componente precisa.
  constructor(private tarefasService: TarefasService) { }

  //variavel para capturar todas as
  //tarefas obtidas pelo service que estao gravadas em memoria

  dados: Tarefa[]=[];

  ngOnInit(): void {
  // trazer todas as tarefas que estão gravadas em memória
  this.dados = this.tarefasService.getTarefas();
  }
 
  // função para realizar a paginação
  handlePageChange(event : any):void{
    this.page = event;
  }
}
