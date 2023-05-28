import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CoursesComponent } from './containers/courses/courses.component';
import { CourseFormComponent } from './containers/course-form/course-form.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { MaterialModule } from '../shared/imports/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { CoursesListComponent } from './components/courses-list/courses-list.component';

@NgModule({
  declarations: [CoursesComponent, CourseFormComponent, CoursesListComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class CoursesModule {}
