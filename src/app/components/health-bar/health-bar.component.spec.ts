import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HealthBarComponent } from './health-bar.component';

describe('HealthBarComponent', () => {
  let component: HealthBarComponent;
  let fixture: ComponentFixture<HealthBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthBarComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HealthBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
