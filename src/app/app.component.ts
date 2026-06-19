import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task3';
 @ViewChild('userForm')userForm!:NgForm;
onSubmit(form: NgForm) {
    console.log(form.value);

    alert('Registration Successful!');

    form.reset();
  }

}
