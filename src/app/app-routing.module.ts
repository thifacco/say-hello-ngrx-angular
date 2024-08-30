import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { PeopleComponent } from './people/people.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';

const routes: Routes = [
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: 'people',
    component: PeopleComponent
  },
  {
    path: 'details',
    component: PeopleDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
