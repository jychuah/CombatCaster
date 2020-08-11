import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OverlayPage } from './overlay.page';

describe('OverlayPage', () => {
  let component: OverlayPage;
  let fixture: ComponentFixture<OverlayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OverlayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
