import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChildrenOutletContexts, RouterLink, RouterOutlet} from '@angular/router';
import {slideInAnimation} from "./route.animations";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  showMenu = false;

  constructor(private contexts: ChildrenOutletContexts) {
  }

  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
