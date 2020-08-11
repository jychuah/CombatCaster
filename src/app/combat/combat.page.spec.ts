import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CombatPage } from './combat.page';

describe('CombatPage', () => {
  let component: CombatPage;
  let fixture: ComponentFixture<CombatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CombatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
