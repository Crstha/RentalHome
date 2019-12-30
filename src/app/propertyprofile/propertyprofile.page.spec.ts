import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PropertyprofilePage } from './propertyprofile.page';

describe('PropertyprofilePage', () => {
  let component: PropertyprofilePage;
  let fixture: ComponentFixture<PropertyprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyprofilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PropertyprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
