import { RxObservable } from '../../internal/Observable';
import { fromEventPattern as staticFromEventPattern } from '../../internal/observable/fromEventPattern';

RxObservable.fromEventPattern = staticFromEventPattern;

declare module '../../internal/Observable' {
  namespace RxObservable {
    export let fromEventPattern: typeof staticFromEventPattern;
  }
}
