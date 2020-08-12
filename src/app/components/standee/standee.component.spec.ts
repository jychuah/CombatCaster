import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StandeeComponent } from './standee.component';

describe('StandeeComponent', () => {
  let component: StandeeComponent;
  let fixture: ComponentFixture<StandeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandeeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StandeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
