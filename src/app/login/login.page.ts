import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { Funcionario } from '../funcionario/entidade/funcionario';
import { Routes } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  funcionario: Funcionario = new Funcionario();
  constructor(private afAuth: AngularFireAuth, private router: Router, public nav: NavController, public fs: AngularFirestore) { }
  logar() {
   this.afAuth.auth.signInWithEmailAndPassword(this.funcionario.email, this.funcionario.senha).then(
     () => { localStorage.setItem('userid', this.afAuth.auth.currentUser.uid);
     this.afAuth.auth.currentUser.updateProfile({
       displayName: this.funcionario.nome,
       photoURL: ''
     }).then(() => {
       this.nav.navigateRoot('/inicio');
     }).catch(err => {
       alert(err.message)
     })
   }).catch(err => {
       alert(err.message)
    })
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
