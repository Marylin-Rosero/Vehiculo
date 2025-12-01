import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false
})
export class RegistroPage implements OnInit {

  formVehiculo!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formVehiculo = this.fb.group({
      marca: ['', Validators.required],

      anio: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]{4}$/)
        ]
      ],

      placa: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[A-Za-z]{3}[0-9]{4}$/)
        ]
      ]
    });
  }

  get marca() { return this.formVehiculo.get('marca'); }
  get anio() { return this.formVehiculo.get('anio'); }
  get placa() { return this.formVehiculo.get('placa'); }

  registrar() {
    console.log("Vehículo registrado:");
    console.log(this.formVehiculo.value);
  }

}