import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from '@firebase/auth';
import { User } from '../login';
import { UserInfo } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ServicesAuth{
  public _user!: User;

  public userInfo: UserInfo = {
    name: "",
  };

  setInfo(info: string | undefined){
    this.userInfo.name = info
    console.log("userinfo", this.userInfo.name)
  }

  getInfo(){
    return this.userInfo
  }

  get user() {
    return this._user;
  }
  constructor(private auth: Auth) {
    this._user = JSON.parse(localStorage.getItem('user')!) || {};
    console.log("servicio inicializado")
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  loginGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider);
    // .then((result) => {
    //   const credential = GoogleAuthProvider.credentialFromResult(result)
    //   const token = credential?.accessToken
    //   const user = result.user;
    //   console.log(user);
    // }).catch((error) => {
    //   // Handle Errors here.
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // The email of the user's account used.
    //   const email = error.email;
    //   // The AuthCredential type that was used.
    //   const credential = GoogleAuthProvider.credentialFromError(error);
    //   // ...
    // });
  }


}
