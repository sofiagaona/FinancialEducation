import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { CoursesComponent } from './courses/courses.component';



@NgModule({
  declarations: [
    HomeComponent,
    QuizComponent,
    CoursesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
