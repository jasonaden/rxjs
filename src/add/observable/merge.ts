import { RxObservable } from '../../internal/Observable';
import { merge as mergeStatic } from '../../internal/observable/merge';

RxObservable.merge = mergeStatic;

declare module '../../internal/Observable' {
  namespace RxObservable {
    export let merge: typeof mergeStatic;
  }
}
