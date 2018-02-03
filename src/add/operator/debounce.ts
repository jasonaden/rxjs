
import { RxObservable } from '../../internal/Observable';
import { debounce } from '../../internal/patching/operator/debounce';

RxObservable.prototype.debounce = debounce;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    debounce: typeof debounce;
  }
}
