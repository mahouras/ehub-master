import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title$: Observable<string>;

  constructor() {
    this.title$ = new Observable(observer => {
      observer.next('ehub');
      observer.complete();
    });
  }

  ngOnInit(): void {}
}