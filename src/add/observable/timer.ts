import { RxObservable } from '../../internal/Observable';
import { timer as staticTimer } from '../../internal/observable/timer';

RxObservable.timer = staticTimer;

declare module '../../internal/Observable' {
  namespace RxObservable {
    export let timer: typeof staticTimer;
  }
}
