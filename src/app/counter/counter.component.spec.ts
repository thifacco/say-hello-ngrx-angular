import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { CounterComponent } from './counter.component';
import { increment, decrement, reset } from './counter-actions';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let store: Store<{ count: number }>;

  beforeEach(async () => {
    const storeMock = {
      select: jasmine.createSpy().and.returnValue(of(0)),
      dispatch: jasmine.createSpy()
    };

    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ],
      providers: [
        { provide: Store, useValue: storeMock }
      ],
      imports: [ StoreModule.forRoot({}) ]
    })
    .compileComponents();

    store = TestBed.inject(Store);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch increment action on increment method call', () => {
    component.increment();
    expect(store.dispatch).toHaveBeenCalledWith(increment());
  });

  it('should dispatch decrement action on decrement method call', () => {
    component.decrement();
    expect(store.dispatch).toHaveBeenCalledWith(decrement());
  });

  it('should dispatch reset action on reset method call', () => {
    component.reset();
    expect(store.dispatch).toHaveBeenCalledWith(reset({ value: 0 }));
  });
});