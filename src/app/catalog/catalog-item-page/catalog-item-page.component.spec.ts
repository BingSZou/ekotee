import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogItemPageComponent } from './catalog-item-page.component';

describe('CatalogItemPageComponent', () => {
  let component: CatalogItemPageComponent;
  let fixture: ComponentFixture<CatalogItemPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogItemPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
