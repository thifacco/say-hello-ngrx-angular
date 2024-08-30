import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent implements OnInit {

  person!: any
  
  constructor(
    private store: Store<{ people: {} }>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.store.select('people').subscribe((people) => {
      this.person = people;
    });
  }

  goBack(): void {
    this.router.navigate(['people']);
  }

}
