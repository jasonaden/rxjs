import { RxObservable } from '../../internal/Observable';
import { defer as staticDefer } from '../../internal/observable/defer';

RxObservable.defer = staticDefer;

declare module '../../internal/Observable' {
  namespace RxObservable {
    export let defer: typeof staticDefer;
  }
}
