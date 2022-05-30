import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Tarefa } from '../models/tarefa.model';
import { TarefasService } from '../services/tarefas.service';

@Component({
  selector: 'app-consulta-tarefas',
  templateUrl: './consulta-tarefas.component.html',
  styleUrls: ['./consulta-tarefas.component.css']
})
export class ConsultaTarefasComponent implements OnInit {
  //atributo para armazenar o filtro de busca
  filtro = "";
  message = "";

  //atributo para armazenar o numero da pagina que o usuario estiver navegando na paginação
  page = 1;

  //metodo construtor utilizado para inicializar
  //os serviços que o componente precisa.
  constructor(private tarefasService: TarefasService) { }

  //variavel para capturar todas as
  //tarefas obtidas pelo service que estao gravadas em memoria
  dados: Tarefa[] = [];

  // variavel para capturar os dados de 1 tarefa selecionada para exclusao ou edicao
  item: Tarefa = {
    idTarefa: -1,
    nome: '',
    data: '',
    hora: '',
    descricao: '',
    prioridade: ''
  }

  ngOnInit(): void {
    // trazer todas as tarefas que estão gravadas em memória
    this.dados = this.tarefasService.getTarefas();
  }


  //form para edição de tarefa
  formEdicaoTarefa = new FormGroup({
    idTarefa: new FormControl('', []),
    nome: new FormControl('', [
      Validators.required,//campo obrigatorio
      Validators.minLength(6),
      Validators.maxLength(150)

    ]),
    data: new FormControl('', [Validators.required]),
    hora: new FormControl('', [Validators.required]),
    descricao: new FormControl('', [Validators.required,
    Validators.minLength(6),
    Validators.maxLength(250)
    ]),
    prioridade: new FormControl('', [Validators.required]),
  });

  //o FormControl(formConsultaTarefa) na pagina HTML
  get form(): any {
    //permitir que possamos acessaor o conteudo do objeto 'formConsultaTarefa' na pagina HTML
    return this.formEdicaoTarefa.controls;
  }

  //metodo para pegar id de quem excluir
  obterTarefa(idTarefa: number): void {
    this.item = this.tarefasService.getTarefaById(idTarefa)
  }

  confirmaExclusao(): void {
    //excluindo a tarefa selecionada
    this.tarefasService.delete(this.item)
    //carregar a tela com dados atualizados
    this.ngOnInit();
  }



  onSubmit(): void {
    //imprimir o conteudo do formulario
    console.log(this.formEdicaoTarefa.value);
    //gravar na lista
    this.tarefasService.addTarefa(this.formEdicaoTarefa.value);
    // limpar os campos do formulario
    this.formEdicaoTarefa.reset();
    // mensagem
    //window.alert("Tarefa cadastrada com sucesso")
    this.message = 'Tarefa cadastrada com sucesso';
  }


  // função para realizar a paginação
  handlePageChange(event: any): void {
    this.page = event;
  }

}
