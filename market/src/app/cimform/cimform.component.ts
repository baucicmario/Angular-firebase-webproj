import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cimform',
  templateUrl: './cimform.component.html',
  styleUrls: ['./cimform.component.css']
})

export class CimformComponent {
  addressForm = this.fb.group({
    email: [null, Validators.required],
    pword: [null, Validators.required],
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
    {name: 'Bács-Kiskun', abbreviation: 'BK'},
    {name: 'Baranya', abbreviation: 'BA'},
    {name: 'Békés', abbreviation: 'BE'},
    {name: 'Borsod-Abaúj-Zemplén', abbreviation: 'BAZ'},
    {name: 'Csongrád-Csanád', abbreviation: 'CS'},
    {name: 'Fejér', abbreviation: 'F'},
    {name: 'Győr-Moson-Sopron', abbreviation: 'GYMS'},
    {name: 'Hajdú-Bihar', abbreviation: 'HB'},
    {name: 'Heves', abbreviation: 'HE'},
    {name: 'Jász-Nagykun-Szolnok', abbreviation: 'JNSZ'},
    {name: 'Komárom-Esztergom', abbreviation: 'KE'},
    {name: 'Nógrád', abbreviation: 'NO'},
    {name: 'Pest', abbreviation: 'PE'},
    {name: 'Somogy', abbreviation: 'SO'},
    {name: 'Szabolcs-Szatmár-Bereg', abbreviation: 'SZSZB'},
    {name: 'Tolna', abbreviation: 'TO'},
    {name: 'Vas', abbreviation: 'VA'},
    {name: 'Veszprém', abbreviation: 'VE'},
    {name: 'Zala', abbreviation: 'ZA'}
   
  ];

  constructor(private fb: FormBuilder, private httpClient: HttpClient) {}

  onSubmit(): void {
    
    this.httpClient.post("https://webfejleszte-bmario-default-rtdb.firebaseio.com/users.json",this.addressForm.value).subscribe(Response => console.log(Response))
    alert('regisztracio sikeres, LÉPJEN BE! :D');
  }
}
