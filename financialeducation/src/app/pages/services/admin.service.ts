import { Injectable } from '@angular/core';
import { Firestore, getDoc, DocumentData } from '@angular/fire/firestore';
import { collection, getDocs, query, where } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

 public filterAdmin!:string 
 public data!:DocumentData[]


  constructor(private bd:Firestore ) { }

  async filter(categoria:string, subcategoria:any){
    this.filterAdmin=categoria;
    
    if (categoria=='age'){
      subcategoria=parseInt(subcategoria);
    }
   

    const q = query(collection(this.bd, "costumer"), where(this.filterAdmin, "==", subcategoria));
    return await getDocs(q);
    
  }

  async  subCat(categoria: string){

    const q = query(collection(this.bd, "costumer"), where(categoria, "!=", true));
    return await getDocs(q);
    
  }

  async getSubFilter(){
    
    const q = query(collection(this.bd, "costmer"));

    const querySnapshot = await query(collection(this.bd, "costmer"), where("city", "!=", false));
    console.log(querySnapshot)
  
    return querySnapshot
  }
  
}
