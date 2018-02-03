import { RxObservable } from '../../internal/Observable';
import { concat as concatStatic } from '../../internal/observable/concat';

RxObservable.concat = concatStatic;

declare module '../../internal/Observable' {
  namespace RxObservable {
    export let concat: typeof concatStatic;
  }
}
