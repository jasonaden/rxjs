
import { RxObservable } from '../../internal/Observable';
import { windowToggle } from '../../internal/patching/operator/windowToggle';

RxObservable.prototype.windowToggle = windowToggle;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    windowToggle: typeof windowToggle;
  }
}
