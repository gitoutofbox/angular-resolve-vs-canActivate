import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
private loaderSubject: Subject<any> = new Subject();
public loader: Observable<any> ;
  constructor() { 
    
  }
  getLoaderStatus$() {
    return this.loaderSubject.asObservable();
  }
  setLoaderStatus(data) {
    this.loaderSubject.next(data);
  }
}
