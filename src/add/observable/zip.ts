import { RxObservable } from '../../internal/Observable';
import { zip as zipStatic } from '../../internal/observable/zip';

RxObservable.zip = zipStatic;

declare module '../../internal/Observable' {
  namespace RxObservable {
    export let zip: typeof zipStatic;
  }
}
