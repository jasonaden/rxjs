
import { RxObservable } from '../../internal/Observable';
import { publishReplay } from '../../internal/patching/operator/publishReplay';

RxObservable.prototype.publishReplay = publishReplay;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    publishReplay: typeof publishReplay;
  }
}
