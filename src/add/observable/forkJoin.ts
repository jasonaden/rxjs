import { RxObservable } from '../../internal/Observable';
import { forkJoin as staticForkJoin } from '../../internal/observable/forkJoin';

RxObservable.forkJoin = staticForkJoin;

declare module '../../internal/Observable' {
  namespace RxObservable {
    export let forkJoin: typeof staticForkJoin;
  }
}
