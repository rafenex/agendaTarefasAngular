import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TarefasService } from '../services/tarefas.service';


@Component({
  selector: 'app-cadastro-tarefas',
  templateUrl: './cadastro-tarefas.component.html',
  styleUrls: ['./cadastro-tarefas.component.css']
})
export class CadastroTarefasComponent implements OnInit{
 
// atributos (campos)
message = "";

//metodo contrutor --> inicializar os services do componente
constructor(private tarefasService : TarefasService){}

// funcao executa antes do componente abrir na pagina
ngOnInit():void{

}

formCadastroTarefa = new FormGroup({
  nome: new FormControl('',[
    Validators.required,//campo obrigatorio
    Validators.minLength(6),
    Validators.maxLength(150)

  ]),
  data: new FormControl('',[Validators.required]),
  hora: new FormControl('',[Validators.required]),
  descricao: new FormControl('',[Validators.required, 
                                 Validators.minLength(6),
                                 Validators.maxLength(250)
                                ]),
  prioridade: new FormControl('',[Validators.required]),
});


//o FormControl(formCadastroTarefa) na pagina HTML
get form():any{
  //permitir que possamos acessaor o conteudo do objeto 'formCadastroTarefa' na pagina HTML
  return this.formCadastroTarefa.controls;
}


// funcao para capturar o evento SUBMIT do formulario
onSubmit(): void{
  //imprimir o conteudo do formulario
  console.log(this.formCadastroTarefa.value);

  //gravar na lista
  this.tarefasService.addTarefa(this.formCadastroTarefa.value);
  // limpar os campos do formulario
  this.formCadastroTarefa.reset();
  // mensagem
  //window.alert("Tarefa cadastrada com sucesso")
  this.message='Tarefa cadastrada com sucesso';
}

//funcao par alimpar mensagem
clearMessage(){
  this.message="";
}


}