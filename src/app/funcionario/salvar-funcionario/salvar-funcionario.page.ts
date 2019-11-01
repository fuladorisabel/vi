import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { Funcionario } from '../entidade/funcionario';


@Component({
  selector: 'app-salvar-funcionario',
  templateUrl: './salvar-funcionario.page.html',
  styleUrls: ['./salvar-funcionario.page.scss'],
})
export class SalvarFuncionarioPage implements OnInit {
  funcionario: Funcionario = new Funcionario();
  constructor(private afAuth: AngularFireAuth, private router: Router) { }

      ngOnInit() { }

      cadastrar() {
        this.afAuth.auth.createUserWithEmailAndPassword(this.funcionario.email, this.funcionario.senha).then(
          () => { this.router.navigate(['listar-mensagem']); }
        ).catch((erro) => console.log(erro));
      }

  }
