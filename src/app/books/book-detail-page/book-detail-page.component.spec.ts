import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailPageComponent } from './book-detail-page.component';

describe('BookDetailPageComponent', () => {
  let component: BookDetailPageComponent;
  let fixture: ComponentFixture<BookDetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BookDetailPageComponent]
    });
    fixture = TestBed.createComponent(BookDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
