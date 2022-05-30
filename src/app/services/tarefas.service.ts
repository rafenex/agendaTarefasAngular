import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Tarefa } from '../models/tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {
  // guardar uma lista de tarefas em memoria
  tarefas : Tarefa[] = [
    {
      idTarefa : 1,
      nome : 'Aula de Java WebDeveloper',
      data : '2022-05-10',
      hora: '18:00',
      descricao: 'Aula de desenvolvimento Java',
      prioridade: '3'
    },
    {
      idTarefa : 2,
      nome : 'Aula de Angular',
      data : '2022-11-10',
      hora: '12:00',
      descricao: 'Aula de Front-end',
      prioridade: '2'
    },
    {
      idTarefa : 3,
      nome : 'Aula de c#',
      data : '2022-12-10',
      hora: '11:00',
      descricao: 'Aula de .NET',
      prioridade: '1'
    },
    {
      idTarefa : 4,
      nome : 'Aula de Node js',
      data : '2023-10-10',
      hora: '09:00',
      descricao: 'Aula de NODE',
      prioridade: '1'
    },
    {
      idTarefa : 5,
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
    //obtendo a quantidade de tarefas cadastradas
    const itemIndex = this.tarefas.length;
    //gerando um id para a tarefa nova
    item.idTarefa = this.getNextId();
    //adicionar a tarefa no final da lista
    this.tarefas[itemIndex] = item;
  }

  //Criar uma função que retorne todo o conteudo
  // da lista de tarefas que esta em memoria
  getTarefas():Tarefa[]{
    return this.tarefas;
  }
  //excluindo uma tarefa da lista
  delete(item : Tarefa){
    this.tarefas.splice(this.tarefas.indexOf(item),1);
  }
  //criando uma função para atualizar uma tarefa
  update(item: Tarefa){
    //procurar na lista a tarefa que possui o id enviado para edição
    const itemIndex = this.tarefas.findIndex(t => t.idTarefa === item.idTarefa);
    // substituir(atualizar)
    this.tarefas[itemIndex] = item;
  }
    //criar uma função para retornar uma tarefa pelo id
    getTarefaById(idTarefa : number):Tarefa{
       //procurar na lista a tarefa atraves
    const itemIndex = this.tarefas.findIndex(t => t.idTarefa === idTarefa);
    return this.tarefas[itemIndex];
    }

    //criando uma função para incrementar o ID da tarefa
    // ou seja, gerar um novoID para o cadastro de uma tarefa
    getNextId():number{
      let maior = 0;
      this.tarefas.forEach(
        function(item){
          if (maior === 0){
          maior = item.idTarefa;
        }
        if(maior < item.idTarefa){
          maior = item.idTarefa
        }      
    }
    );
    return maior + 1

  }
}
