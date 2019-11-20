import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { SalvarAlunoPage } from 'src/app/aluno/salvar-aluno/salvar-aluno.page';
import { SalvarFuncionarioPage } from 'src/app/funcionario/salvar-funcionario/salvar-funcionario.page';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }
  async tela(ev: any) {
      const popover = await this.popoverController.create({
        component: SalvarFuncionarioPage,
        event: ev,
        translucent: true
      });
      return await popover.present();
    }
    async telaa(ev: any) {
        const popover = await this.popoverController.create({
          component: SalvarAlunoPage,
          event: ev,
          translucent: true
        });
        return await popover.present();
      }
}
