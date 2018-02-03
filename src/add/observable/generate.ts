import { RxObservable } from '../../internal/Observable';
import { generate as staticGenerate } from '../../internal/observable/generate';

RxObservable.generate = staticGenerate;

declare module '../../internal/Observable' {
  namespace RxObservable {
    export let generate: typeof staticGenerate;
  }
}
