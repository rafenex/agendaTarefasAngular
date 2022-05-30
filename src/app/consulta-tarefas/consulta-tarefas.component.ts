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

  //metodo para pegar id de quem excluir ou editar
  obterTarefa(idTarefa: number, opcao?: string): void {
    //buscar os dados da tarefa atraves do ID.
    this.item = this.tarefasService.getTarefaById(idTarefa)
    //se a opcao for editar iremos preencher um form.
    if (opcao === 'EDITAR') {
      //Preencher os campos do FORM.
      this.form.idTarefa.setValue(this.item.idTarefa);
      this.form.nome.setValue(this.item.nome);
      this.form.data.setValue(this.item.data);
      this.form.hora.setValue(this.item.hora);
      this.form.descricao.setValue(this.item.descricao);
      this.form.prioridade.setValue(this.item.prioridade);
      this.message = "";
    }
  }

  //funcao para excluir uma tarefa
  confirmaExclusao(): void {
    //excluindo a tarefa selecionada
    this.tarefasService.delete(this.item)
    //carregar a tela com dados atualizados
    this.ngOnInit();
    this.message = "Dados excluidos com sucesso!"
  }

  //funcao para confirmar atualização de uma tarefa
  confirmarAtualizacao(): void {
    //atualizar a tarefa com os dados obtidos do formulario
    this.tarefasService.update(this.formEdicaoTarefa.value);
    //carregar a tela com dados atualizados
    this.ngOnInit();
    this.message = "Dados atualizados com sucesso!"
  }

  // função para realizar a paginação
  handlePageChange(event: any): void {
    this.page = event;
  }

}
