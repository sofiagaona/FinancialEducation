import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { ServicesService } from '../services/services.service';
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
    private authService:ServicesService,
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
             console.log(resp)
            
              this.user = {
                email:resp.user.email!,
              }
              this.authService._user=this.user
              console.log(this.user)
              localStorage.setItem('user',JSON.stringify(this.authService.user) );
              this.router.navigateByUrl('/courses')
             
            
            
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
          console.log(user.email);
          localStorage.setItem('user',JSON.stringify(this.authService.user) );
          this.router.navigateByUrl('/courses')
        }).catch((error) => {
          Swal.fire({
            title: 'Error!',
            text: 'Credenciales invalidas',
            confirmButtonText: 'OK'
          })
        });
      
    }

  ngOnInit(): void {
  }

}
