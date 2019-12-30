import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CostumSearchPage } from './costum-search.page';

describe('CostumSearchPage', () => {
  let component: CostumSearchPage;
  let fixture: ComponentFixture<CostumSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostumSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CostumSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
