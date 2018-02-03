
import { RxObservable } from '../../internal/Observable';
import { letProto } from '../../internal/patching/operator/let';

RxObservable.prototype.let = letProto;
RxObservable.prototype.letBind = letProto;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    let: typeof letProto;
    letBind: typeof letProto;
  }
}
