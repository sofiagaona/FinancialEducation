import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../../auth/login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  openModal () { 
    const modalRef = this.modalService.open (LoginComponent, 
      { 
        scrollable: true,
        windowClass: 'myCustomModalClass', 
        keyboard: false,
        backdrop: 'static'
      });
      
    }
  ngOnInit(): void {
  }

}
