import { Observable, Subscribable } from '../Observable';
import { IScheduler } from '../Scheduler';
import { RxSubscription } from '../Subscription';
import { observable as Symbol_observable } from '../symbol/observable';
import { subscribeToObservable } from '../util/subscribeToObservable';

// tslint:disable-next-line:no-any TS is unable to type [Symbol.observable]
export function fromObservable<T>(input: any, scheduler: IScheduler) {
  if (!scheduler) {
    return new Observable<T>(subscribeToObservable(input));
  } else {
    return new Observable<T>(subscriber => {
      const sub = new RxSubscription();
      sub.add(scheduler.schedule(() => {
        const observable: Subscribable<T> = input[Symbol_observable]();
        sub.add(observable.subscribe({
          next(value) { sub.add(scheduler.schedule(() => subscriber.next(value))); },
          error(err) { sub.add(scheduler.schedule(() => subscriber.error(err))); },
          complete() { sub.add(scheduler.schedule(() => subscriber.complete())); },
        }));
      }));
      return sub;
    });
  }
}
