import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditEncounterPage } from './edit-encounter.page';

describe('EditEncounterPage', () => {
  let component: EditEncounterPage;
  let fixture: ComponentFixture<EditEncounterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEncounterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditEncounterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
