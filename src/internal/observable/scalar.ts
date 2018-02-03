import { RxObservable } from '../Observable';

export function scalar<T>(value: T) {
  const result = new RxObservable<T>(subscriber => {
    subscriber.next(value);
    subscriber.complete();
  });
  (result as any)._isScalar = true;
  (result as any).value = value;
  return result;
}
