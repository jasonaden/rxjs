
import { RxObservable } from '../../internal/Observable';

import { scan } from '../../internal/patching/operator/scan';

RxObservable.prototype.scan = scan;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    scan: typeof scan;
  }
}
