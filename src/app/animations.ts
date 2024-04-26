import { animate, style, transition, trigger } from '@angular/animations';

export const transformIn = trigger('transformIn', [
  transition(':enter', [
    style({
      transform: 'translate(-50%, -50%) scale(0)',
    }),
    animate(
      '300ms ease-in',
      style({ transform: 'translate(-50%, -50%) scale(1)' })
    ),
  ]),
]);
export const transformOut = trigger('transformOut', [
  transition(':leave', [
    style({
      transform: 'translate(-50%, -50%) scale(1)',
    }),
    animate(
      '300ms ease-out',
      style({ transform: 'translate(-50%, -50%) scale(0)' })
    ),
  ]),
]);
