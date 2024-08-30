import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from './counter-actions';
import { startWith } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  count$ = this.store.select(state => state.count);

  constructor(private store: Store<{ count: number }>) {}

  increment() {
    console.log('increment called');
    this.store.dispatch(increment());
  }

  decrement() {
    console.log('increment calle data-d');
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset({ value: 0 }));
  }
}
