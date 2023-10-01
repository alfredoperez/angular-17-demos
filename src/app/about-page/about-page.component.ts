import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {slideInAnimation} from "../route.animations";

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  animations: [slideInAnimation],
})
export class AboutPageComponent {

}
