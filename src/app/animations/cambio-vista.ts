import { trigger, state, animate, transition, style, query, group, animateChild } from '@angular/animations';

export const AnimacionCambioDeVista = trigger('cambioDeVista', [
  transition('void => *', [//Enter
    style({ position: 'absolute', transform: 'translateX(100%)' }), animate('.2s ease-in-out', style({ transform: 'translateX(0%)' })), animateChild()
  ]),
  transition('* => void', [//Exit
    style({ position: 'absolute', transform: 'translateX(0%)' }), animate('.2s ease-in-out', style({ transform: 'translateX(-100%)' })), animateChild()
  ])
]);
