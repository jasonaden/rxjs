
import { RxObservable } from '../../internal/Observable';
import { publish } from '../../internal/patching/operator/publish';

RxObservable.prototype.publish = <any>publish;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    publish: typeof publish;
  }
}
