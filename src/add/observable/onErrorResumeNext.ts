import { RxObservable } from '../../internal/Observable';
import { onErrorResumeNext as staticOnErrorResumeNext } from '../../internal/observable/onErrorResumeNext';

RxObservable.onErrorResumeNext = staticOnErrorResumeNext;

declare module '../../internal/Observable' {
  namespace RxObservable {
    export let onErrorResumeNext: typeof staticOnErrorResumeNext;
  }
}
