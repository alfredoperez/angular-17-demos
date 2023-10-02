import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksPageComponent } from './books-page.component';

describe('BooksPageComponent', () => {
  let component: BooksPageComponent;
  let fixture: ComponentFixture<BooksPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BooksPageComponent]
    });
    fixture = TestBed.createComponent(BooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
