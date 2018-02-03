
import { RxObservable } from '../../internal/Observable';
import { ignoreElements } from '../../internal/patching/operator/ignoreElements';

RxObservable.prototype.ignoreElements = ignoreElements;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    ignoreElements: typeof ignoreElements;
  }
}
