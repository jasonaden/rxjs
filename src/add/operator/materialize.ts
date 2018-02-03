
import { RxObservable } from '../../internal/Observable';
import { materialize } from '../../internal/patching/operator/materialize';

RxObservable.prototype.materialize = materialize;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    materialize: typeof materialize;
  }
}
