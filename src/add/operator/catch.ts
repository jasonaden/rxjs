
import { RxObservable } from '../../internal/Observable';
import { _catch } from '../../internal/patching/operator/catch';

RxObservable.prototype.catch = _catch;
RxObservable.prototype._catch = _catch;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    catch: typeof _catch;
    _catch: typeof _catch;
  }
}
