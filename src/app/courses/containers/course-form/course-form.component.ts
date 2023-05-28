import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {
  constructor(
    private formBuilder: NonNullableFormBuilder,
    private location: Location,
    private courserService: CoursesService,
    private snackBar: MatSnackBar
  ) {}

  form = this.formBuilder.group({
    name: [''],
    category: [''],
  });

  onCancel() {
    this.location.back();
  }

  onSubmit() {
    this.courserService.create(this.form.value).subscribe({
      next: () => this.onSuccess(),
      error: () => this.onError(),
    });
  }

  private onError() {
    this.snackBar.open('Erro ao salvar curso.', '', { duration: 3000 });
  }

  private onSuccess() {
    this.snackBar.open('Curso salvo com sucesso!', '', { duration: 3000 });
    this.onCancel();
  }
}
