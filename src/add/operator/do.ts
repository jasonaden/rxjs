
import { RxObservable } from '../../internal/Observable';
import { _do } from '../../internal/patching/operator/do';

RxObservable.prototype.do = _do;
RxObservable.prototype._do = _do;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    do: typeof _do;
    _do: typeof _do;
  }
}
