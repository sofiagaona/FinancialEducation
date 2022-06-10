import { Component, OnInit } from '@angular/core';
import { collection, Firestore } from '@angular/fire/firestore';
import { getDocs } from '@firebase/firestore';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private adminService:AdminService, private bd:Firestore ) { }

  ngOnInit(): void {
  }
  async getUsers(){
    const querySnapshot = await getDocs(collection(this.bd,"costumer"));
       querySnapshot.forEach((doc) => {
         // doc.data() is never undefined for query doc snapshots
         console.log(doc.id, " => ", doc.data());
         
  });
}
}