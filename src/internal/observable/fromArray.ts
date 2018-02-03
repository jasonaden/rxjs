import { RxObservable } from '../Observable';
import { IScheduler } from '../Scheduler';
import { RxSubscription } from '../Subscription';
import { subscribeToArray } from '../util/subscribeToArray';

export function fromArray<T>(input: ArrayLike<T>, scheduler?: IScheduler): RxObservable<T> {
  if (!scheduler) {
    return new RxObservable<T>(subscribeToArray(input));
  } else {
    return new RxObservable<T>(subscriber => {
      const sub = new RxSubscription();
      let i = 0;
      sub.add(scheduler.schedule(function () {
        if (i === input.length) {
          subscriber.complete();
          return;
        }
        subscriber.next(input[i++]);
        if (!subscriber.closed) {
          sub.add(this.schedule());
        }
      }));
      return sub;
    });
  }
}
