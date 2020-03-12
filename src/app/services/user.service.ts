import { Injectable } from '@angular/core';
import { Resolve, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { SubjectService } from '../services/subject.service';

@Injectable({
  providedIn: 'root'
})
export class UserService implements Resolve<any> {
  constructor(private subjectService: SubjectService, private http: HttpClient, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    if(!this.checkLogin()) {
      console.log('User is not logged-in')
      this.router.navigate(['/login']);
        return of();
    }
    console.log('User is logged-in')

    
    let id = 1; // or from session/local storage
    this.subjectService.setLoaderStatus({"showLoader": true})

    return this.http.get(`http://localhost:8081/user/getUserInfo/${id}`).pipe(
      map(userInfo => {     
          this.subjectService.setLoaderStatus({"showLoader": false})
        if (userInfo['isActive']) {
          return userInfo;
        } else {
          this.subjectService.setLoaderStatus({"showLoader": false})
          this.router.navigate(['/404']);
          return of();
        }
      }),
      catchError(err => {
        this.subjectService.setLoaderStatus({"showLoader": false})
        console.log('API error');
        this.router.navigate(['/404']);
        return of();
      })
    );
  }

  checkLogin() {
    // check user login in session storage
    return true;
  }
}
