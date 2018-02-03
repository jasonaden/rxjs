import { Action } from '../scheduler/Action';
import { IScheduler } from '../Scheduler';
import { Subscriber } from '../Subscriber';
import { Subscription } from '../Subscription';
import { Observable, RxObservable } from '../Observable';
import { asap } from '../scheduler/asap';
import { isNumeric } from '..//util/isNumeric';
import { from } from './from';

export interface DispatchArg<T> {
  source: Observable<T>;
  subscriber: Subscriber<T>;
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
export class SubscribeOnObservable<T> extends RxObservable<T> {
  static create<T>(source: Observable<T>, delay: number = 0, scheduler: IScheduler = asap): RxObservable<T> {
    return new SubscribeOnObservable(source, delay, scheduler);
  }

  static dispatch<T>(this: Action<T>, arg: DispatchArg<T>): Subscription {
    const { source, subscriber } = arg;
    return this.add(source.subscribe(subscriber));
  }

  public source: RxObservable<T>;

  constructor(source: Observable<T>,
              private delayTime: number = 0,
              private scheduler: IScheduler = asap) {
    super();
    this.source = source && from(source);
    if (!isNumeric(delayTime) || delayTime < 0) {
      this.delayTime = 0;
    }
    if (!scheduler || typeof scheduler.schedule !== 'function') {
      this.scheduler = asap;
    }
  }

  protected _subscribe(subscriber: Subscriber<T>) {
    const delay = this.delayTime;
    const source = this.source;
    const scheduler = this.scheduler;

    return scheduler.schedule<DispatchArg<any>>(SubscribeOnObservable.dispatch, delay, {
      source, subscriber
    });
  }
}