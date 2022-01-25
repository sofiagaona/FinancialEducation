import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services/services.service';
import { RegisterComponent } from '../../auth/register/register.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  public question1: boolean[] = [];
  public event: boolean = false;
  public event1: boolean = false;

  formQuiz: FormGroup = this.fb.group({
    question1option1: [''],
    question1option2: [''],
    question1option3: [''],
    question1option4: [''],
    question1option5: [''],
    question1option6: [''],
    question2: [''],
    q2option1: [''],
    q2option2: [''],
    q2option3: [''],
    q2option4: [''],
    q3option1: [''],
    q3option2: [''],
    question5option1: [''],
    question5option2: [''],
    question5option3: [''],
    question5option4: [''],
    question5option5: [''],
    q4option1: [''],
    q4option2: [''],
    q4option3: [''],
    q4option4: [''],
    name: ['', [Validators.required, Validators.minLength(3)]],
    age: ['', [Validators.required, Validators.minLength(2)]],
    gender: ['',[Validators.required]],
  });


  get questionOne() {
    return this.formQuiz;
  }

  score() {
    const { name, age, gender } = this.formQuiz.value;

    for (const property in this.formQuiz.value) {
      if (property === 'question2') {
        if (this.formQuiz.value[property] <= 5) {
          this.formQuiz.value[property] = false;
        }
        if (this.formQuiz.value[property] > 5) {
          this.formQuiz.value[property] = true;
        }
      }
      this.question1.push(this.formQuiz.value[property]);
    }
    let score = this.question1.filter((element) => {
      return element == true;
    });

    this.servicePage.registerData(name, age, gender, score.length);
    this.openModal();
  }

  value: number = 5;
  options: Options = {
    floor: 0,
    ceil: 10,
    showSelectionBar: true,
    getSelectionBarColor: (value: number): string => {
      if (value <= 2.5) {
        return 'red';
      }
      if (value <= 7) {
          return 'orange';
      }
      if (value <= 8) {
          return '#FFCE00';
      }
      return '#FFCE00';
    }
  };

  openModal () { 
    const modalRef = this.modalService.open (RegisterComponent, 
      { 
        scrollable: true,
        windowClass: 'myCustomModalClass', 
        keyboard: false,
        backdrop: 'static',
        size: 'lg',
      });
  }

    eventWizar(event:Event){
      console.log(event)
      this.servicePage.eventWizar=event;
    }

  
  constructor(private fb:FormBuilder, private servicePage:ServicesService, private modalService: NgbModal, private infoServices: InfoService, public el: ElementRef)  { }

  stateColor: boolean = false
  step01: boolean = true
  step02: boolean = false
  step03: boolean = false
  step04: boolean = false
  step05: boolean = false


  @HostListener("scroll", ['$Event'])

  @HostListener('window:scroll', ['$event'])
  windowwsPos(){
    const comp = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset
    console.log(comp, scrollPosition)
  }


  ss: any 
  changeColor( $event: Event){
    this.ss = $event?.currentTarget
    const scroll = this.ss.scrollY
   

    if(scroll<=800){
      this.step01 = true
      this.step02 = false
      this.step03 = false
      this.step04 = false
      this.step05 = false
    }
    if(scroll>= 801 && scroll<=1300){
      this.step01 = false
      this.step02 = true
      this.step03 = false
      this.step04 = false
      this.step05 = false
    }
    if(scroll>= 1301 && scroll<=1800){
      this.step01 = false
      this.step02 = false
      this.step03 = true
      this.step04 = false
      this.step05 = false
    }
    if(scroll>= 1801 && scroll<=2300){
      this.step01 = false
      this.step02 = false
      this.step03 = false
      this.step04 = true
      this.step05 = false
    }
    if(scroll>= 2301){
      this.step01 = false
      this.step02 = false
      this.step03 = false
      this.step04 = false
      this.step05 = true
    }
    
  }

  playSound() {
    let audio = new Audio();
    audio.src = "./assets/audio/fan.mp3"
    audio.volume = 0.2;
    audio.play();
  }

  ngOnInit(): void {}

}
