import { RxObservable } from '../../internal/Observable';
import { from as staticFrom } from '../../internal/observable/from';

RxObservable.from = staticFrom;

declare module '../../internal/Observable' {
  namespace RxObservable {
    export let from: typeof staticFrom;
  }
}
