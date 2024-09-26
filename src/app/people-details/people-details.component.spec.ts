import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { PeopleDetailsComponent } from './people-details.component';

describe('PeopleDetailsComponent', () => {
  let component: PeopleDetailsComponent;
  let fixture: ComponentFixture<PeopleDetailsComponent>;
  let store: Store<{ people: {} }>;
  let router: Router;

  beforeEach(async () => {
    const storeMock = {
      select: jasmine.createSpy().and.returnValue(of({ name: 'John Doe' })),
      dispatch: jasmine.createSpy()
    };

    const routerMock = {
      navigate: jasmine.createSpy()
    };

    await TestBed.configureTestingModule({
      declarations: [ PeopleDetailsComponent ],
      providers: [
        { provide: Store, useValue: storeMock },
        { provide: Router, useValue: routerMock }
      ],
      imports: [ StoreModule.forRoot({}) ]
    })
    .compileComponents();

    store = TestBed.inject(Store);
    router = TestBed.inject(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to people on goBack method call', () => {
    component.goBack();
    expect(router.navigate).toHaveBeenCalledWith(['people']);
  });
});