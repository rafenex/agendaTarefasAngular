import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-cadastro-tarefas',
  templateUrl: './cadastro-tarefas.component.html',
  styleUrls: ['./cadastro-tarefas.component.css']
})
export class CadastroTarefasComponent implements OnInit{
 
// atributos (campos)
message = "";

constructor(){}

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
}

//funcao par alimpar mensagem
clearMessage(){
  this.message="";
}


}