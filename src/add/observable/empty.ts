import { RxObservable } from '../../internal/Observable';
import { empty as staticEmpty } from '../../internal/observable/empty';

RxObservable.empty = staticEmpty;

declare module '../../internal/Observable' {
  namespace RxObservable {
    export let empty: typeof staticEmpty;
  }
}
