import {
  animate,
  animation,
  AnimationTriggerMetadata,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';

const fadeAnimation = animation(
  [
    style({ opacity: '{{ start }}' }),
    animate('{{ duration }} {{ timing }}', style({ opacity: '{{ end }}' })),
  ],
  {
    params: {
      start: '0',
      end: '1',
      duration: '400ms',
      timing: 'ease-in',
    },
  },
);

const transformAnimation = animation(
  [
    style({ transform: 'translate(-50%, -50%) scale({{ start }})' }),
    animate(
      '{{ duration }} {{ timing }}',
      style({ transform: 'translate(-50%, -50%) scale({{ end }})' }),
    ),
  ],
  {
    params: {
      start: '0',
      end: '1',
      duration: '400ms',
      timing: 'ease-in',
    },
  },
);

export const fadeIn: AnimationTriggerMetadata = trigger('fadeIn', [
  transition(':enter', [
    useAnimation(fadeAnimation, {
      params: { start: '0', end: '1', timing: 'ease-in' },
    }),
  ]),
]);

export const fadeOut: AnimationTriggerMetadata = trigger('fadeOut', [
  transition(':leave', [
    useAnimation(fadeAnimation, {
      params: { start: '1', end: '0', timing: 'ease-out' },
    }),
  ]),
]);

export const transformIn: AnimationTriggerMetadata = trigger('transformIn', [
  transition(':enter', [
    useAnimation(transformAnimation, {
      params: { start: '0', end: '1', timing: 'ease-in' },
    }),
  ]),
]);

export const transformOut: AnimationTriggerMetadata = trigger('transformOut', [
  transition(':leave', [
    useAnimation(transformAnimation, {
      params: { start: '1', end: '0', timing: 'ease-out' },
    }),
  ]),
]);
