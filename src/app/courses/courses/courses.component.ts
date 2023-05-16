import { Observable } from 'rxjs';

import { Component } from '@angular/core';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  courses$: Observable<Course[]>;

  constructor(private courserService: CoursesService) {
    this.courses$ = this.courserService.findAll();
  }

  displayedColumns = ['name', 'category'];
}
