import { RxObservable } from '../../internal/Observable';
import { bindCallback as staticBindCallback } from '../../internal/observable/bindCallback';

RxObservable.bindCallback = staticBindCallback;

declare module '../../internal/Observable' {
  namespace RxObservable {
    export let bindCallback: typeof staticBindCallback;
  }
}
