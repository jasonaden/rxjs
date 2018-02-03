
import { RxObservable } from '../../internal/Observable';
import { shareReplay } from '../../internal/patching/operator/shareReplay';

RxObservable.prototype.shareReplay = shareReplay;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    shareReplay: typeof shareReplay;
  }
}
