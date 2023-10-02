import {animate, animateChild, group, query, style, transition, trigger} from "@angular/animations";

export const slideInAnimation =
  trigger('routeAnimations', [
    slidePages('Home', 'Books', 'right'),
    slidePages('Books', 'Home', 'left'),
  ]);


function slidePages(fromPage: string, toPage: string, direction: 'left' | 'right') {
  return transition(`${fromPage} <=> ${toPage}`, [
    style({position: 'relative'}),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        [direction]: 0,
        width: '100%'
      })
    ], {optional: true}),
    query(':enter', [
      style({[direction]: '-100%'})
    ], {optional: true}),
    query(':leave', animateChild(), {optional: true}),
    group([
      query(':leave', [
        animate('200ms ease-out', style({[direction]: '100%'}))
      ], {optional: true}),
      query(':enter', [
        animate('300ms ease-out', style({[direction]: '0%'}))
      ], {optional: true}),
    ]),
  ])
}
