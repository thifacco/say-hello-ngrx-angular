import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent implements OnInit {
  
  constructor(private store: Store<{ people: {} }>) { }

  ngOnInit(): void {
    this.store.select('people').subscribe((people) => {
      console.log(people);
    });
  }

}
