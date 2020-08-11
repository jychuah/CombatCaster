import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EncountersPage } from './encounters.page';

describe('EncountersPage', () => {
  let component: EncountersPage;
  let fixture: ComponentFixture<EncountersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncountersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EncountersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
