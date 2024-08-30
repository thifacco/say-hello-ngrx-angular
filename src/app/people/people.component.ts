import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  peopleDetails = this.store.select('people');

  constructor(
    private router: Router,
    private store: Store<{ people: {} }>
  ) { }
  
  ngOnInit(): void {
    this.store.dispatch({ type: '[People Component] Clean' });
  }

  details(): void {
    this.store.dispatch({ type: '[People Component] Add' });
    this.router.navigate(['details']);
  }
}
