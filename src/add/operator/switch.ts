
import { RxObservable } from '../../internal/Observable';
import { _switch } from '../../internal/patching/operator/switch';

RxObservable.prototype.switch = _switch;
RxObservable.prototype._switch = _switch;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    switch: typeof _switch;
    _switch: typeof _switch;
  }
}
