import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Sneaker } from 'src/app/models/sneaker';
import { SneakersService } from 'src/app/services/sneakers/sneakers.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  addForm: FormGroup;
  isSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private snkrsService: SneakersService
  ) {
    this.addForm = this.buildForm();
  }

  ngOnInit(): void {}

  buildForm(): FormGroup {
    return this.formBuilder.group({
      modelName: ['', [Validators.required, Validators.minLength(2)]],
      brand: ['', [Validators.required, Validators.minLength(2)]],
      colorway: ['', [Validators.required, Validators.minLength(2)]],
      size: ['', [Validators.required, Validators.minLength(2)]],
      link: ['', []],
      pictures: ['', []],
      addToCalendar: [false, []],
    });
  }

  async create(form: any) {
    this.isSubmitted = true;
    if (!this.addForm.valid) {
      console.log('add form invalid');
      return;
    }

    const sneakerModel: Sneaker = this.addForm.value;
    this.snkrsService.save(sneakerModel);
    await this.navCtrl.pop();
  }

  get errorControl() {
    return this.addForm.controls;
  }
}
