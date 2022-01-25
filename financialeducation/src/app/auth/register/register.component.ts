import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { authState, user } from '@angular/fire/auth';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ServicesService } from 'src/app/pages/services/services.service';
import { isThisTypeNode } from 'typescript';
@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.css' ]
})



export class RegisterComponent implements OnInit {
	name: string | null = '';
	public email: string = '';
	password: string = '';
	passwordConfirm: string = '';
	sex: string | null = 'Sexo';
	age: number = 0;
	cp: string = '28986';
	sepomex: string = '';
	state: string = '';
	city: string = '';
	study: string = 'Estudios';
	job: string = 'Ocupación';
	passwordmessage: string = '';
	levelgeded: number = 0;
	namelevel: string = '';
	
	animationR: boolean = false;

	texts: string[] = [
		'Si hoy perdieras tu empleo (obviamente deseamos que no pase); no podrías sobrevivir cómodamente por mucho tiempo. Pero no te preocupes, nosotros te daremos las bases para que alcances esa abundancia financiera que tanto necesitas y deseas.',
		'En este punto el dinero no te causa estrés, cuentas con unos ahorritos que podrían sacarte de apuros (chiquitos, tampoco es como que tengas los millones guardados), pero puedes mejorar y accionar para alcanzar la abundancia financiera que tanto necesitas y deseas.',
		'Estás a casi nada de alcanzar la abundancia financiera que anhelas, ya sabes que el ahorro no basta y has comenzado a tomar otras medidas básicas. Completa el conocimiento que ya tienes para que logres tu objetivo de alcanzar la libertad financiera.',
		'Has alcanzado esa libertad financiera que tanto anhelabas, aunque hoy el trabajar sea una opción, aún te falta aprender a incrementar tus inversiones para cambiar esa libertad por Abundancia. Aquí te mostramos cómo lograrlo.',
		'¡Por fin alcanzaste la abundancia Financiera con la que tanto soñabas y por la que tanto trabajaste! Hoy tienes ya un conocimiento amplio sobre finanzas, sabes poner a trabajar tu dinero y disfrutas ese nivel que tienes. No olvides que podemos charlar sobre temas financieros en el momento que lo decidas, estamos a un click de distancia.'
	];

	public levelimage! : string;
	// imgLevel01:string = '';

	constructor(
		private http: HttpClient,
		private db: Firestore,
		private auth: Auth,
		private sercies: ServicesService,
		private activeModal: NgbActiveModal
	) {}

	createRequestOption() {
		const headers = new HttpHeaders({
			'Content-Type': 'application/json',
			Apikey: '44e5c7f7f4af06352cc287e0e2240b6de1b953cd'
		});
		return headers;
	}

	closeModal() {
		window.location.href = '/';
	}

	getAdress() {
		let option = this.createRequestOption();

		return this.http.get<any>(this.sepomex, { headers: option }).subscribe((resp) => {
			this.state = resp.codigo_postal.estado.charAt(0) + resp.codigo_postal.estado.slice(1).toLowerCase();
			this.city = resp.codigo_postal.municipio.charAt(0) + resp.codigo_postal.municipio.slice(1).toLowerCase();
			console.log(this.state, this.city);
		});
	}

	checkCp() {
		this.sepomex = 'https://sepomex.razektheone.com/codigo_postal?cp=' + this.cp;
		this.getAdress();
	}

	ls(event: any) {
		this.cp = event.target.value;
		if (event.target.value.length >= 5) {
			console.log('bien');
			this.cp = event.target.value;
			this.checkCp();
		}
	}

	async sendForm() {
		console.log(this.sex);

		if (this.password.length <= 7 || this.password != this.passwordConfirm || this.email == '') {
			return alert('Datos Incompletos, revise correo y constraseña');
		}

		if (this.cp.length <= 4 || this.job == 'Ocupación' || this.study == 'Estudios') {
			return alert('Datos Incompletos, CP, Ocupación o Estudios');
		}

		await createUserWithEmailAndPassword(this.auth, this.email, this.password)
			.then(async (userCredential) => {
				if (userCredential.user) {
					await setDoc(doc(this.db, 'costumer', this.email), {
						name: this.sercies.userQuiz.name,
						email: this.email,
						age: this.age,
						sex: this.sex,
						cp: this.cp,
						state: this.state,
						city: this.city,
						study: this.study,
						job: this.job,
						level: this.levelgeded,
						namelevel: this.namelevel,
						levelimage: this.levelimage

					});
					localStorage.clear();
					window.location.href = '/courses';
				}
			})
			.catch((error) => {
				if (error.code == 'auth/email-already-in-use') {
					alert('Usuario ya registrado');
				}
				if (error.code == 'auth/weak-password') {
					alert('Contraseña Corta');
				}
			});
	}

	checkPassword(event: any) {
		if (this.password.length <= 7 && this.password != '') {
			this.passwordmessage = 'Contraseña muy corta';
		} else {
			this.passwordmessage = '';
			if (this.password != this.passwordConfirm) {
				this.passwordmessage = 'Contraseñas no coinciden';
			}
		}
	}

	ngOnInit(): void {
		console.log(this.sercies.userQuiz);

		this.name = this.sercies.userQuiz.name;
		this.levelgeded = this.sercies.userQuiz.level;
		this.age = this.sercies.userQuiz.age;
		this.sex = this.sercies.userQuiz.gender;

		switch (this.levelgeded) {
			case 1:

				this.namelevel = 'Modo Zombie';
				this.levelimage = 'assets/img/piclevel/zombie.gif';
				break;
			case 2:
				this.namelevel = 'Modo Survivor';
				this.levelimage = 'assets/img/piclevel/survivor.gif';
				break;
			case 3:
				this.namelevel = 'Modo Ejecutivo';
				this.levelimage = 'assets/img/piclevel/executive.gif';
				break;
			case 4:
				this.namelevel = 'Modo Elite';
				this.levelimage = 'assets/img/piclevel/elite.gif';
				break;
			case 5:
				this.namelevel = 'Modo Leyenda';
				this.levelimage = 'assets/img/piclevel/legend.gif';
				break;
			default:
		}

		setTimeout(() => {
			this.animationR = true;
		}, 3000);
	}
}
