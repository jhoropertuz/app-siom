import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistorialRepartoPage } from './historial-reparto.page';

describe('HistorialRepartoPage', () => {
  let component: HistorialRepartoPage;
  let fixture: ComponentFixture<HistorialRepartoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialRepartoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistorialRepartoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
