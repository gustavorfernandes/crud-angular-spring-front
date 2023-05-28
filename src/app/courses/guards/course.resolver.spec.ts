import { Observable, of } from 'rxjs';

import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { courseResolver } from './course.resolver';
import { CoursesService } from '../services/courses.service';
import { Course } from '../model/course';

describe('courseResolver', () => {
  let resolver: (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) => Observable<Course>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [courseResolver],
    });

    resolver = TestBed.inject(courseResolver);
  });

  it('should resolve course by ID', () => {
    const courseId = '123';
    const mockRoute = {
      params: { id: courseId },
    } as unknown as ActivatedRouteSnapshot;
    const mockState = {} as RouterStateSnapshot;

    // Simulate CoursesService.findOneById() returning a course
    const mockCoursesService = {
      findOneById: jasmine
        .createSpy('findOneById')
        .and.returnValue(
          of({ _id: courseId, name: 'Test Course', category: 'Test Category' })
        ),
    };

    TestBed.overrideProvider(CoursesService, { useValue: mockCoursesService });

    resolver(mockRoute, mockState).subscribe((resolvedCourse) => {
      expect(resolvedCourse._id).toBe(courseId);
      expect(resolvedCourse.name).toBe('Test Course');
      expect(resolvedCourse.category).toBe('Test Category');
      expect(mockCoursesService.findOneById).toHaveBeenCalledWith(courseId);
    });
  });

  it('should return empty course if ID is not provided', () => {
    const mockRoute = { params: {} } as ActivatedRouteSnapshot;
    const mockState = {} as RouterStateSnapshot;

    resolver(mockRoute, mockState).subscribe((resolvedCourse) => {
      expect(resolvedCourse._id).toBe('');
      expect(resolvedCourse.name).toBe('');
      expect(resolvedCourse.category).toBe('');
    });
  });
});
