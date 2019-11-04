import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { Router, NavigationExtras } from '@angular/router';
import {  Mensagem } from 'src/app/mensagem';

@Component({
  selector: 'app-listar-mensagem',
  templateUrl: './listar-mensagem.page.html',
  styleUrls: ['./listar-mensagem.page.scss'],
})
export class ListarCidadePage implements OnInit {
  listaMensagem: Observable<Mensagem[]>;
  listaFiltro: Mensagem[];
  filtro = {};
  mensagens: any;
  valor: string;


    constructor(private fire: AngularFireDatabase, private rota: Router) {
      this.listaMensagem = this.fire.list<Mensagem>('mensagem').snapshotChanges().pipe(
        map( lista => lista.map(linha => ({ key: linha.payload.key, ... linha.payload.val() })))
      );
    }
  ngOnInit() {
    this.listaMensagem.subscribe(Mensagem => {
       this.mensagens = Mensagem;
       this.listaFiltro = _.filter(this.mensagens, _.conforms(this.filtro));
   })
  }
  filtrar(){
   this.filtro['campo3'] = val => val.includes(this.valor);
   this.listaFiltro = _.filter(this.mensagens, _.conforms(this.filtro));
 }


}
