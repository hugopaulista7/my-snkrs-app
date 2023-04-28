import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  addForm: FormGroup;
  isSubmitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.addForm = this.formBuilder.group({
      modelName: ['', [Validators.required, Validators.minLength(2)]],
      brand: ['', [Validators.required, Validators.minLength(2)]],
      colorway: ['', [Validators.required, Validators.minLength(2)]],
      size: ['', [Validators.required, Validators.minLength(2)]],
      link: ['', []],
      pictures: ['', []],
      launchDate: ['', []],
      addToCalendar: [false, []],
    });
  }

  ngOnInit(): void {}

  create(form: any) {
    this.isSubmitted = true;
    console.log('form:: ', form);
  }

  get errorControl() {
    return this.addForm.controls;
  }
}
