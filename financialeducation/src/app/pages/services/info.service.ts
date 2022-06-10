import { Injectable } from '@angular/core';
import { UserInfo } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  public info: string = ""

  setInfo(info: string){
    this.info = info
  }

  userInfo: UserInfo | undefined = {
    name: ""

  }

  stateColor: boolean = true

  constructor() { }
}
