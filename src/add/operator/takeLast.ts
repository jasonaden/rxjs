import { RxObservable } from '../../internal/Observable';
import { takeLast } from '../../internal/patching/operator/takeLast';

RxObservable.prototype.takeLast = takeLast;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    takeLast: typeof takeLast;
  }
}
