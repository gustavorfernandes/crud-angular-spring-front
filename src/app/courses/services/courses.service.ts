import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../model/course';
import { delay, first } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) {}

  private create(body: Partial<Course>) {
    return this.httpClient.post<Course>(this.API, body).pipe(first());
  }

  findAll() {
    return this.httpClient.get<Course[]>(this.API).pipe(first(), delay(1000));
  }

  findOneById(id: string) {
    return this.httpClient.get<Course>(`${this.API}/${id}`);
  }

  private update(body: Partial<Course>) {
    return this.httpClient
      .put<Course>(`${this.API}/${body._id}`, body)
      .pipe(first());
  }

  save(payload: Partial<Course>) {
    if (payload._id) {
      return this.update(payload);
    } else {
      return this.create(payload);
    }
  }
}
