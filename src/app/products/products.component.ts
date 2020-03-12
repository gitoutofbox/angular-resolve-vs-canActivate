import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  username: string = '';
  dob: Date;
  constructor(private activatedRoute: ActivatedRoute) { 
    console.log('activatedRoute', activatedRoute)
    this.activatedRoute.data.subscribe(resp => {
      console.log(resp);
      this.username = resp['userDetails']['userName'];
      this.dob = resp['userDetails']['dob'];
    })
  }

  ngOnInit(): void {
  }

}
