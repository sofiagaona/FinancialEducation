import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { ServicesAuth } from '../services/services.Auth';
import { User } from '../login';
import { GoogleAuthProvider} from '@firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user!:User


  formLogin: FormGroup= this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required,Validators.minLength(8)]]
  })

  constructor(
    public activeModal: NgbActiveModal,
    private auth:Auth,
    private authService:ServicesAuth,
    private fb:FormBuilder,
    private router:Router
  ) { }

  closeModal(send:any){
    this.activeModal.close(send );
    }

    login(){
      const {email, password} = this.formLogin.value;
       this.authService.login(email,password)
       .then ( resp => {
              this.user = {
                email:resp.user.email!,
              }
              this.authService._user=this.user
              localStorage.setItem('user',JSON.stringify(this.authService.user) );
              console.log(resp.user.email);
              if(resp.user.email=='admin@administrador.com'){
                console.log('entro')
                window.location.href ='/admin'
              }
              if(resp.user.email!="admin@administrador.com"){
                window.location.href = '/courses'
              }
              
              
             this.closeModal('dismiss')
            
            
          })
          .catch(error=>{
            Swal.fire({
              title: 'Error!',
              text: 'Credenciales invalidas',
              confirmButtonText: 'OK'
            })
          })


    }

    loginGoogle(){
      this.authService.loginGoogle()
      .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result)
          const token = credential?.accessToken
          const user = result.user;
          this.user = {
            email:user.email!,
          }
          this.authService._user=this.user
          localStorage.setItem('user',JSON.stringify(this.authService.user) );
          this.router.navigateByUrl('/courses')
          this.closeModal('dismiss')
        }).catch((error) => {
          Swal.fire({
            title: 'Error!',
            text: 'Credenciales invalidas',
            confirmButtonText: 'OK'
          })
        });
      
    }

    showQuix(){
      window.location.href = '/quiz';
    }

  ngOnInit(): void {
  }

}
