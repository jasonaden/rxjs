
import { RxObservable } from '../../internal/Observable';
import { groupBy } from '../../internal/patching/operator/groupBy';

RxObservable.prototype.groupBy = <any>groupBy;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    groupBy: typeof groupBy;
  }
}
