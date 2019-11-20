import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { Mensagem } from 'src/app/mensagem';
import { SalvarMensagemComponent } from 'src/app/mensagem/salvar-mensagem/salvar-mensagem.component';
import { PopoverController } from '@ionic/angular';
import { ListaChaveComponent } from 'src/app/lista-chave/lista-chave.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-listar-mensagem',
  templateUrl: './listar-mensagem.page.html',
  styleUrls: ['./listar-mensagem.page.scss'],
})
export class ListarMensagemPage implements OnInit {
  listaMensagem: Observable<Mensagem[]>;
  listaFiltro: Mensagem[];
  filtro = {};
  mensagens: any;
  valor: string;


  constructor(private fire: AngularFireDatabase, private modal: ModalController, private rota: Router, public popoverController: PopoverController) {
    this.listaMensagem = this.fire.list<Mensagem>('mensagem').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
    );
  }
  ngOnInit() {
    this.listaMensagem.subscribe(Mensagem => {
      this.mensagens = Mensagem;
      this.listaFiltro = _.filter(this.mensagens, _.conforms(this.filtro));
    })
  }
  filtrar() {
    this.filtro['campo3'] = val => val.includes(this.valor);
    this.listaFiltro = _.filter(this.mensagens, _.conforms(this.filtro));
  }
  async tela(ev: any) {
    const popover = await this.popoverController.create({
      component: ListaChaveComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  async alterar(entidade) {
    const tela = await this.modal.create({
      component: SalvarMensagemComponent, componentProps: { mensagem: entidade }
    });
    tela.present();
  }


}
