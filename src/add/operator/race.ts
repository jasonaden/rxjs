
import { RxObservable } from '../../internal/Observable';
import { race } from '../../internal/patching/operator/race';

RxObservable.prototype.race = race;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    race: typeof race;
  }
}
