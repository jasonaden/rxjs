import { RxObservable } from '../../internal/Observable';
import { pairs as staticPairs } from '../../internal/observable/pairs';

RxObservable.pairs = staticPairs;

declare module '../../internal/Observable' {
  namespace RxObservable {
    export let pairs: typeof staticPairs;
  }
}
