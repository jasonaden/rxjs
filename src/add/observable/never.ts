import { RxObservable } from '../../internal/Observable';
import { never as staticNever } from '../../internal/observable/never';

RxObservable.never = staticNever;

declare module '../../internal/Observable' {
  namespace RxObservable {
    export let never: typeof staticNever;
  }
}
