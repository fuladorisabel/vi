import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensagem } from '../mensagem';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-lista-chave',
  templateUrl: './lista-chave.component.html',
  styleUrls: ['./lista-chave.component.scss'],
})
export class ListaChaveComponent implements OnInit {

  listaMensagem: Observable<Mensagem[]>;
  constructor(private fire: AngularFireDatabase, private rota: Router, public popoverController: PopoverController) {
    this.listaMensagem = this.fire.list<Mensagem>('mensagem').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
    ); }

  ngOnInit() {}

}
