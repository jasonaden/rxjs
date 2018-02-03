import { RxObservable } from '../../internal/Observable';
import { throwError } from '../../internal/observable/throwError';

(RxObservable as any).throw = throwError;
