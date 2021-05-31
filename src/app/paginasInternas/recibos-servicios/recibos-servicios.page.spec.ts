import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecibosServiciosPage } from './recibos-servicios.page';

describe('RecibosServiciosPage', () => {
  let component: RecibosServiciosPage;
  let fixture: ComponentFixture<RecibosServiciosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecibosServiciosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecibosServiciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
