import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  form: FormGroup = this.formBuilder.group({
    name: [null],
    category: [null],
  });

  onCancel() {
    this.router.navigate(['']);
  }

  onSubmit() {
    console.log('Submeteu o formulário')
  }
}
