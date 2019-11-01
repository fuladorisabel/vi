import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from '../funcionario/entidade/funcionario';
import { AngularFireAuth } from "angularfire2/auth";
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  funcionario: Funcionario = new Funcionario();
  constructor(private afAuth: AngularFireAuth, private router: Router) { }
  logar() {
    this.afAuth.auth.signInWithEmailAndPassword(this.funcionario.email, this.funcionario.senha).then(
      () => { this.router.navigate(['lista-mensagem']); }
    ).catch((erro) => console.log(erro));
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['home']);
  }
   ngOnInit() {}
   mudar(){
     alert('verifique seu email');
     this.afAuth.auth.sendPasswordResetEmail(this.funcionario.email).then(()=> alert('verifique seu email')); {this.router.navigate([]);}
   }
 }
