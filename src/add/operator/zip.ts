
import { RxObservable } from '../../internal/Observable';
import { zipProto } from '../../internal/patching/operator/zip';

RxObservable.prototype.zip = zipProto;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    zip: typeof zipProto;
  }
}
