
import { RxObservable } from '../../internal/Observable';
import { multicast } from '../../internal/patching/operator/multicast';

RxObservable.prototype.multicast = <any>multicast;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    multicast: typeof multicast;
  }
}
