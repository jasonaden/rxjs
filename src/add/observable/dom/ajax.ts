import { RxObservable } from '../../../internal/Observable';
import { ajax as staticAjax } from '../../../internal/observable/dom/ajax';
import { AjaxCreationMethod } from '../../../internal/observable/dom/AjaxObservable';

RxObservable.ajax = staticAjax;

declare module '../../../internal/Observable' {
  namespace RxObservable {
    export let ajax: AjaxCreationMethod;
  }
}
