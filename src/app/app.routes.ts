import {Routes} from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {BooksPageComponent} from "./books/books-page/books-page.component";
import {BookDetailPageComponent} from "./books/book-detail-page/book-detail-page.component";

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', component: HomePageComponent, data: {animation: 'Home'}},
  {path: 'books', component: BooksPageComponent, data: {animation: 'Books'}},
  {path: 'books/:id', component: BookDetailPageComponent},

];

