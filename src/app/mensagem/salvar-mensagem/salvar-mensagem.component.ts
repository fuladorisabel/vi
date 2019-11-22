import { Component, OnInit } from '@angular/core';
import { Mensagem } from 'src/app/mensagem';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { PopoverController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-salvar-mensagem',
  templateUrl: './salvar-mensagem.component.html',
  styleUrls: ['./salvar-mensagem.component.scss'],
})
export class SalvarMensagemComponent implements OnInit {
  mensagem: Mensagem = new Mensagem();
  key;
  constructor(private fire: AngularFireDatabase,private modal: ModalController,  private rota: Router) { }
  enviar() {
    if (this.key == null) {
      this.fire.list('mensagem').push(this.mensagem);
      this.mensagem = new Mensagem();
      this.rota.navigate(['listar-mensagem']);
    }
    else {
      this.fire.object('mensagem/' + this.key).update(this.mensagem);
      this.modal.dismiss();
    }
  }

  ngOnInit() { }

}
