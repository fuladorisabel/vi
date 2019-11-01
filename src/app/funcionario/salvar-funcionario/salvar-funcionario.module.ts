import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { IonicModule } from '@ionic/angular';



import { SalvarFuncionarioPage } from './salvar-funcionario.page';

const routes: Routes = [
  {
    path: '',
    component: SalvarFuncionarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalvarFuncionarioPage],
   providers: [AngularFireAuth]
})
export class SalvarFuncionarioPageModule {}
