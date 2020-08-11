import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MonstersPage } from './monsters.page';

describe('MonstersPage', () => {
  let component: MonstersPage;
  let fixture: ComponentFixture<MonstersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonstersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MonstersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
