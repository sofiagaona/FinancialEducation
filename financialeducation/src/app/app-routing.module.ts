import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { RegisterComponent } from './auth/register/register.component';
import { EdituserinfoComponent } from './pages/edituserinfo/edituserinfo.component';
import { TestComponent } from './pages/test/test.component';
import { PagequizComponent } from './pages/pagequiz/pagequiz.component';
import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'quiz',
		component: QuizComponent
	},
	{
		path: 'quizPage',
		component: PagequizComponent
	},
	{
		path: 'courses',
		component: CoursesComponent
	},
	{
		path: 'register',
		component: RegisterComponent
	},
	{
		path: 'edituser',
		component: EdituserinfoComponent
	},
	{
		path: 'test',
		component: TestComponent
	},
	{
		path: 'admin',
		component: AdminComponent
	},
	{
		path: '**',
		component: HomeComponent
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
