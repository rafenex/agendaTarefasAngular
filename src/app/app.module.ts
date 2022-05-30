import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PainelPrincipalComponent } from './painel-principal/painel-principal.component';
import { CadastroTarefasComponent } from './cadastro-tarefas/cadastro-tarefas.component';
import { ConsultaTarefasComponent } from './consulta-tarefas/consulta-tarefas.component';

import { Routes, RouterModule} from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

const routes: Routes = [

  {
    path: 'painel-principal',component: PainelPrincipalComponent
  },
  {
    path: 'cadastro-tarefas',component: CadastroTarefasComponent
  },
  {
    path: 'consulta-tarefas',component: ConsultaTarefasComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PainelPrincipalComponent,
    CadastroTarefasComponent,
    ConsultaTarefasComponent
  ],
  imports: [
   BrowserModule,
   RouterModule.forRoot(routes),
   FormsModule,
   ReactiveFormsModule,
   NgxPaginationModule,
   Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }