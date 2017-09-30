import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

export function visibility () {
    return trigger('visibility', [
        state('shown', style ({
          transform:'scale(1.0)',
          opacity: 1
        })),
        state('hidden', style({
          transform: 'scale(0.5)',
          opacity: 0
        })),
        transition('* => *', animate('0.5s ease-in-out'))
      ]);
}

export function flyInOut() {
    return trigger('flyInOut', [
        state('in', style({transform: 'translateX(0)'})),
        transition('void => *', [
          animate(300, keyframes([
            style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
            style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
          ]))
        ]),
        transition('* => void', [
          animate(700, keyframes([
            style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
            style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
            style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
          ]))
        ])
      ])
        
      
}

export function expand() {
    return trigger('expand', [
        state('*', style({ opacity: 1, transform: 'translateX(0)' })),
        transition(':enter', [
            style({transform: 'translateY(-50%)', opacity: 0 }),
            animate('200ms ease-in', style({ opacity: 1, transform: 'translateX(0)' }))
        ])
    ]);
}