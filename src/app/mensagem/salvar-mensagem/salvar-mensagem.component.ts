import { Component, OnInit } from '@angular/core';
import { Mensagem } from 'src/app/mensagem';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salvar-mensagem',
  templateUrl: './salvar-mensagem.component.html',
  styleUrls: ['./salvar-mensagem.component.scss'],
})
export class SalvarMensagemComponent implements OnInit {
  mensagem: Mensagem = new Mensagem();
  constructor(private fire: AngularFireDatabase, private rota: Router) { }
  enviar() {
    this.fire.list('mensagem').push(this.mensagem);
    this.mensagem = new Mensagem();
    this.rota.navigate(['/']);
  }

  ngOnInit() { }

}
