import { Injectable } from '@angular/core';
import { UserInfo } from 'src/app/interfaces/interfaces';
import { UserQuiz } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
private _userQuiz!:UserQuiz

public userInfo: UserInfo | undefined = {
  name: "",
};

public eventWizar?:Event;

get userQuiz(){
  return this._userQuiz
}

  constructor() { }

  registerData(name:string, age:number, gender:string, score:number){
    
   this._userQuiz={
    name:name,
    age:age,
    gender:gender,
    level:score
  }
   console.log(this._userQuiz)
   switch (true) {
    case score >= 0 && score <= 3:
       this._userQuiz.level=1
        break;
    case score > 3 && score <= 7:
      this._userQuiz.level=2;
        break;
        case score > 7 && score <= 10:
          this._userQuiz.level=3;
        break;
        case score > 10 && score <= 13:
          this._userQuiz.level=4;
        break;
        case score > 13 && score <= 17:
          this._userQuiz.level=5;
        break;
    default:
        alert("Puntuación no capturada, por favor intentalo nuevamente");
}
  }
  eventWizard(event?:Event){
    this.eventWizar=event
    return this.eventWizar
  }
}
