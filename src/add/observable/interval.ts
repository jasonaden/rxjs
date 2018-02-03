import { RxObservable } from '../../internal/Observable';
import { interval as staticInterval } from '../../internal/observable/interval';

RxObservable.interval = staticInterval;

declare module '../../internal/Observable' {
  namespace RxObservable {
    export let interval: typeof staticInterval;
  }
}
