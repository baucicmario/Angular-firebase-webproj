import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cimform',
  templateUrl: './cimform.component.html',
  styleUrls: ['./cimform.component.css']
})
export class CimformComponent {
  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

  states = [
    {name: 'Bács-Kiskun', abbreviation: 'AL'},
    {name: 'Baranya', abbreviation: 'AK'},
    {name: 'Békés', abbreviation: 'AS'},
    {name: 'Borsod-Abaúj-Zemplén', abbreviation: 'AZ'},
    {name: 'Csongrád-Csanád', abbreviation: 'AR'},
    {name: 'Fejér', abbreviation: 'CA'},
    {name: 'Győr-Moson-Sopron', abbreviation: 'CO'},
    {name: 'Hajdú-Bihar', abbreviation: 'CT'},
    {name: 'Heves', abbreviation: 'DE'},
    {name: 'Jász-Nagykun-Szolnok', abbreviation: 'DC'},
    {name: 'Komárom-Esztergom', abbreviation: 'FM'},
    {name: 'Nógrád', abbreviation: 'FL'},
    {name: 'Pest', abbreviation: 'GA'},
    {name: 'Somogy', abbreviation: 'GU'},
    {name: 'Szabolcs-Szatmár-Bereg', abbreviation: 'HI'},
    {name: 'Tolna', abbreviation: 'ID'},
    {name: 'Vas', abbreviation: 'IL'},
    {name: 'Veszprém', abbreviation: 'IN'},
    {name: 'Zala', abbreviation: 'IA'}
   
  ];

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('regisztracio sikeres');
  }
}
