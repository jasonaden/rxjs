import { RxObservable } from '../../internal/Observable';
import { bindNodeCallback as staticBindNodeCallback } from '../../internal/observable/bindNodeCallback';

RxObservable.bindNodeCallback = staticBindNodeCallback;

declare module '../../internal/Observable' {
  namespace RxObservable {
    export let bindNodeCallback: typeof staticBindNodeCallback;
  }
}
