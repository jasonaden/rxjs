import { RxObservable } from '../../internal/Observable';
import { of as staticOf } from '../../internal/observable/of';

RxObservable.of = staticOf;

declare module '../../internal/Observable' {
  namespace RxObservable {
    export let of: typeof staticOf; //formOf an iceberg!
  }
}
