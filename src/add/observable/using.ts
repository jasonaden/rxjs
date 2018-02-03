import { RxObservable } from '../../internal/Observable';
import { using as staticUsing } from '../../internal/observable/using';

RxObservable.using = staticUsing;

declare module '../../internal/Observable' {
  namespace RxObservable {
    export let using: typeof staticUsing;
  }
}
