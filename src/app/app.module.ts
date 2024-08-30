import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule, Action } from '@ngrx/store';
import { CounterComponent } from './counter/counter.component';
import { counterReducer } from './counter/counter-reducer';
import { PeopleComponent } from './people/people.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { peopleReducer } from './people/people-reducer';

interface RootState {
  count: number;
  people: {}; // Replace 'any' with the actual type of your people state
}

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    PeopleComponent,
    PeopleDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot<RootState>({ count: counterReducer, people: peopleReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
