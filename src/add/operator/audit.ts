import { RxObservable } from '../../internal/Observable';
import { audit } from '../../internal/patching/operator/audit';

RxObservable.prototype.audit = audit;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    audit: typeof audit;
  }
}
