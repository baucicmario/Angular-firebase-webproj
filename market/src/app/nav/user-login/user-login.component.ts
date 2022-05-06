import { Component, Output, EventEmitter  } from '@angular/core';
import { FormBuilder, Validators,} from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  addressForm = this.fb.group({
    email: [null, Validators.required],
    pword: [null, Validators.required],

  });


  @Output() messageEvent = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Bejelentkezve (Email: '+this.addressForm.value.email+'       jelszó: '+ this.addressForm.value.pword+')');
    console.log();
    this.messageEvent.emit(false)
   
  }
}
