import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ListaChaveComponent } from './lista-chave/lista-chave.component';
import { SalvarMensagemComponent } from './mensagem/salvar-mensagem/salvar-mensagem.component';
import { OpcoesComponent } from './opcoes/opcoes.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'salvar-funcionario', loadChildren: './funcionario/salvar-funcionario/salvar-funcionario.module#SalvarFuncionarioPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'inicio', loadChildren: './chat/inicio/inicio.module#InicioPageModule' },
  { path: 'salvar-aluno', loadChildren: './aluno/salvar-aluno/salvar-aluno.module#SalvarAlunoPageModule' },
  { path: 'lista-chave', component : ListaChaveComponent},
  { path: 'listar-aluno', loadChildren: './aluno/listar-aluno/listar-aluno.module#ListarAlunoPageModule' },
 { path: 'listar-mensagem', loadChildren: './mensagem/listar-mensagem/listar-mensagem.module#ListarMensagemPageModule' },
  {path: 'salvar-mensagem', component : SalvarMensagemComponent},
  {path: 'opcoes', component : OpcoesComponent},
  { path: 'salvar-turma', loadChildren: './turma/salvar-turma/salvar-turma.module#SalvarTurmaPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
