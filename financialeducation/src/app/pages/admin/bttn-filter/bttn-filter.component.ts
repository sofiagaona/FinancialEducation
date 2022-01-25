import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DocumentData, doc } from '@angular/fire/firestore';

@Component({
	selector: 'app-bttn-filter',
	templateUrl: './bttn-filter.component.html',
	styleUrls: [ './bttn-filter.component.css' ]
})
export class BttnFilterComponent implements OnInit {
	public data: DocumentData[] = [];
	public subCat: DocumentData[] = [];

	formFilter: FormGroup = this.fb.group({
		categoria: [ '', [ Validators.required ] ],
		subcategoria: [ '' ]
	});

	constructor(private adminService: AdminService, private fb: FormBuilder) {}

	filterAdmin() {
		console.log('hhhhh');
		const { categoria, subcategoria } = this.formFilter.value;
		console.log(categoria, subcategoria);
		this.adminService.filter(categoria, subcategoria).then((result) => {
			this.data = [];
			result.forEach((doc) => {
				console.log(doc.id, ' => ', doc.data());
				console.log(doc.data());
				this.data.push(doc.data());
				console.log(this.data);
				this.adminService.data = this.data;
			});

			//return doc.data();
		});
	}

	subcat() {
		const { categoria } = this.formFilter.value;
		this.adminService.subCat(categoria).then((result) => {
			this.subCat = [];
			result.forEach((doc) => {
				console.log(doc.id, ' => ', doc.data()[categoria]);
				this.subCat.push(doc.data()[categoria]);
				this.subCat = this.subCat.filter((item, index) => {
					return this.subCat.indexOf(item) === index;
				});
				console.log(this.subCat);
			});
		});
	}

	async ngOnInit(): Promise<void> {}
}
