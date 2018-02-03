
import { RxObservable } from '../../internal/Observable';
import { _finally } from '../../internal/patching/operator/finally';

RxObservable.prototype.finally = _finally;
RxObservable.prototype._finally = _finally;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    finally: typeof _finally;
    _finally: typeof _finally;
  }
}
