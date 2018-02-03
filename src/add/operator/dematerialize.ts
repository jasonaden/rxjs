
import { RxObservable } from '../../internal/Observable';
import { dematerialize } from '../../internal/patching/operator/dematerialize';

RxObservable.prototype.dematerialize = dematerialize;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    dematerialize: typeof dematerialize;
  }
}
