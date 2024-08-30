import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {
  peopleDetails = this.store.select('people');

  constructor(
    private router: Router,
    private store: Store<{ people: {} }>
  ) { }

  details(): void {
    this.store.dispatch({ type: '[People Component] Add' });
    this.router.navigate(['details']);
  }
}
