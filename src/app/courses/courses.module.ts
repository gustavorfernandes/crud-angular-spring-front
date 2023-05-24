import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesComponent } from './courses/courses.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { MaterialModule } from '../shared/imports/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { CourseFormComponent } from './course-form/course-form.component';

@NgModule({
  declarations: [CoursesComponent, CourseFormComponent],
  imports: [CommonModule, CoursesRoutingModule, MaterialModule, SharedModule],
})
export class CoursesModule {}
