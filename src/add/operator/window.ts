
import { RxObservable } from '../../internal/Observable';
import { window } from '../../internal/patching/operator/window';

RxObservable.prototype.window = window;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    window: typeof window;
  }
}
