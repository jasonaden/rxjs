
import { RxObservable } from '../../internal/Observable';
import { share } from '../../internal/patching/operator/share';

RxObservable.prototype.share = share;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    share: typeof share;
  }
}
