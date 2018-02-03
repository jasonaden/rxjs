import { RxObservable } from '../../../internal/Observable';
import { webSocket as staticWebSocket } from '../../../internal/observable/dom/webSocket';

RxObservable.webSocket = staticWebSocket;

declare module '../../../internal/Observable' {
  namespace RxObservable {
    export let webSocket: typeof staticWebSocket;
  }
}
