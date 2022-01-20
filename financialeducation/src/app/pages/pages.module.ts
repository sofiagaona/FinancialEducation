import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { CoursesComponent } from './courses/courses.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';



@NgModule({
  declarations: [
    HomeComponent,
    QuizComponent,
    CoursesComponent
  ],
  imports: [
    CommonModule,
    NgxSliderModule
  ]
})
export class PagesModule { }
