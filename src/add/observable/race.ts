import { RxObservable } from '../../internal/Observable';
import { race as staticRace } from '../../internal/observable/race';

RxObservable.race = staticRace;

declare module '../../internal/Observable' {
  namespace RxObservable {
    export let race: typeof staticRace;
  }
}
