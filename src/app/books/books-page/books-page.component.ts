import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {books as mockedBooks} from "./book.mocks";
import {RouterLink} from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-books-page',
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss']
})
export class BooksPageComponent {

  books = mockedBooks

}
