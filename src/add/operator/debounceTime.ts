
import { RxObservable } from '../../internal/Observable';
import { debounceTime } from '../../internal/patching/operator/debounceTime';

RxObservable.prototype.debounceTime = debounceTime;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    debounceTime: typeof debounceTime;
  }
}
