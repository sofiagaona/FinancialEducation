import { Component, Input, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { DocumentData } from '@angular/fire/firestore';

@Component({
  selector: 'app-info-filter',
  templateUrl: './info-filter.component.html',
  styleUrls: ['./info-filter.component.css']
})
export class InfoFilterComponent implements OnInit {
  //public data!:DocumentData[]
  @Input()data!:DocumentData
  constructor(private serviceAdmin:AdminService) { }

 

  ngOnInit(): void {
   
  }

}
