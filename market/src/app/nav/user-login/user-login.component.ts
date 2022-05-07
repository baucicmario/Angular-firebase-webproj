import { Component, Output, EventEmitter  } from '@angular/core';
import { FormBuilder, Validators,} from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  addressForm = this.fb.group({
    email: [null, Validators.required],
    pword: [null, Validators.required],
    loginForm: null,

  });
  @Output() messageEvent = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder,private httpClient: HttpClient) {}

  onSubmit(): void {
    const url = "https://webfejleszte-bmario-default-rtdb.firebaseio.com/users.json"

    let email = this.addressForm.value.email
    let pass = this.addressForm.value.pword
    this.httpClient
      .get(
        'https://webfejleszte-bmario-default-rtdb.firebaseio.com/users.json',
        {
          params: new HttpParams()
            .set('orderBy', '"email"')
            .set('equalTo', `"${email}"`),
        }
      )
      .subscribe((user) => {
        if(Object.keys(user)?.length > 0){
          console.log(user)
          this.messageEvent.emit(false)
        } else{
          alert("HIBÁS JELSZÓ/FELHASZNÁLÓ")
        }
      });
      
  }
}
