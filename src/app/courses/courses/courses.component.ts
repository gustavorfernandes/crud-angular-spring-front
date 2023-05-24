import { Observable, catchError, of } from 'rxjs';

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  courses$: Observable<Course[]>;

  constructor(
    public dialog: MatDialog,
    private courserService: CoursesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.courses$ = this.courserService.findAll().pipe(
      catchError(() => {
        this.onError('Erro ao carregar a lista de cursos.');
        return of([]);
      })
    );
  }

  displayedColumns = ['name', 'category', 'actions'];

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
