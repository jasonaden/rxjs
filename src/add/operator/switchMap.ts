
import { RxObservable } from '../../internal/Observable';
import { switchMap } from '../../internal/patching/operator/switchMap';

RxObservable.prototype.switchMap = switchMap;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    switchMap: typeof switchMap;
  }
}
