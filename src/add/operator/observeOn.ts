
import { RxObservable } from '../../internal/Observable';
import { observeOn } from '../../internal/patching/operator/observeOn';

RxObservable.prototype.observeOn = observeOn;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    observeOn: typeof observeOn;
  }
}
