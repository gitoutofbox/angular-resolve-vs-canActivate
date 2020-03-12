import { Component } from '@angular/core';
import { SubjectService } from './services/subject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'resolve-canactivate';
  showLoader = false;
  constructor(private subjectService: SubjectService) {
    this.subjectService.getLoaderStatus$().subscribe(resp =>{
      this.showLoader = resp['showLoader'];
    })
  }
}
