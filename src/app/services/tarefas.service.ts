import { Injectable } from '@angular/core';
import { Tarefa } from '../models/tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {
  // guardar uma lista de tarefas em memoria
  tarefas : Tarefa[] = [
    {
      nome : 'Aula de Java WebDeveloper',
      data : '2022-05-10',
      hora: '18:00',
      descricao: 'Aula de desenvolvimento Java',
      prioridade: '3'
    },
    {
      nome : 'Aula de Angular',
      data : '2022-11-10',
      hora: '12:00',
      descricao: 'Aula de Front-end',
      prioridade: '2'
    },
    {
      nome : 'Aula de c#',
      data : '2022-12-10',
      hora: '11:00',
      descricao: 'Aula de .NET',
      prioridade: '1'
    },
    {
      nome : 'Aula de Node js',
      data : '2023-10-10',
      hora: '09:00',
      descricao: 'Aula de NODE',
      prioridade: '1'
    },
    {
      nome : 'Aula de SQL',
      data : '2022-12-10',
      hora: '11:00',
      descricao: 'Aula de Banco de dados',
      prioridade: '1'
    },

  ];  // inicializando com um array (lista)
  constructor() { }

  //criando uma função para capturar uma tarefa vinda da pagina 
  //de cadastro e adiciona-la na lista que esta em memoria

  addTarefa(item : Tarefa){
    //adicionar na lista
    this.tarefas.push(item);
  }

  getTarefas():Tarefa[]{
    return this.tarefas;
  }

  //Criar uma função que retorne todo o conteudo
  // da lista de tarefas que esta em memoria

}
