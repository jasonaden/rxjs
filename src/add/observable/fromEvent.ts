import { RxObservable } from '../../internal/Observable';
import { fromEvent as staticFromEvent } from '../../internal/observable/fromEvent';

RxObservable.fromEvent = staticFromEvent;

declare module '../../internal/Observable' {
  namespace RxObservable {
    export let fromEvent: typeof staticFromEvent;
  }
}
