import { Action } from '@ngrx/store';

export class CustomAction implements Action {
  type: string;
  payload: any;
}
