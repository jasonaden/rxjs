import { RxObservable } from '../../internal/Observable';
import { auditTime } from '../../internal/patching/operator/auditTime';

RxObservable.prototype.auditTime = auditTime;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    auditTime: typeof auditTime;
  }
}
