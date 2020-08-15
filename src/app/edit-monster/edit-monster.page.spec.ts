import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditMonsterPage } from './edit-monster.page';

describe('EditMonsterPage', () => {
  let component: EditMonsterPage;
  let fixture: ComponentFixture<EditMonsterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMonsterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditMonsterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
