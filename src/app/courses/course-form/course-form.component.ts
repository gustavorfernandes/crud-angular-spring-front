import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private courserService: CoursesService,
    private snackBar: MatSnackBar
  ) {}

  form: FormGroup = this.formBuilder.group({
    name: [null],
    category: [null],
  });

  onCancel() {
    this.router.navigate(['']);
  }

  onSubmit() {
    this.courserService.create(this.form.value).subscribe({
      next: (result) => console.log(result),
      error: (error) => this.onError(),
    });
  }

  private onError() {
    this.snackBar.open('Erro ao salvar curso.', '', { duration: 3000 });
  }
}
