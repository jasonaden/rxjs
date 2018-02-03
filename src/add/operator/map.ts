
import { RxObservable } from '../../internal/Observable';
import { map } from '../../internal/patching/operator/map';

RxObservable.prototype.map = map;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    map: typeof map;
  }
  interface Observable<T> {
    map: typeof map;
  }
}
