import { RxObservable } from '../../internal/Observable';
import { range as staticRange } from '../../internal/observable/range';

RxObservable.range = staticRange;

declare module '../../internal/Observable' {
  namespace RxObservable {
    export let range: typeof staticRange;
  }
}
