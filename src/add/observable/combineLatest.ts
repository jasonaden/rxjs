import { RxObservable } from '../../internal/Observable';
import { combineLatest as combineLatestStatic } from '../../internal/observable/combineLatest';

RxObservable.combineLatest = combineLatestStatic;

declare module '../../internal/Observable' {
  namespace RxObservable {
    export let combineLatest: typeof combineLatestStatic;
  }
}
