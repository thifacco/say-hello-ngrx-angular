import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { PeopleComponent } from './people.component';

describe('PeopleComponent', () => {
  let component: PeopleComponent;
  let fixture: ComponentFixture<PeopleComponent>;
  let store: Store<{ people: {} }>;
  let router: Router;

  beforeEach(async () => {
    const storeMock = {
      select: jasmine.createSpy().and.returnValue(of({})),
      dispatch: jasmine.createSpy()
    };

    const routerMock = {
      navigate: jasmine.createSpy()
    };

    await TestBed.configureTestingModule({
      declarations: [ PeopleComponent ],
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
    fixture = TestBed.createComponent(PeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch clean action on init', () => {
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith({ type: '[People Component] Clean' });
  });

  it('should dispatch add action and navigate to details on details method call', () => {
    component.details();
    expect(store.dispatch).toHaveBeenCalledWith({ type: '[People Component] Add' });
    expect(router.navigate).toHaveBeenCalledWith(['details']);
  });
});