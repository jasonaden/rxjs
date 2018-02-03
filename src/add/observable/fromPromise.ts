import { RxObservable } from '../../internal/Observable';
import { fromPromise as staticFromPromise } from '../../internal/observable/fromPromise';

RxObservable.fromPromise = staticFromPromise;

declare module '../../internal/Observable' {
  namespace RxObservable {
    export let fromPromise: typeof staticFromPromise;
  }
}
