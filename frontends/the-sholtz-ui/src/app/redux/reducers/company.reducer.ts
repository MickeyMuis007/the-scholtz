import * as companyActions from "@actions/company.actions";
import { AppState } from '@models/app-state';
import { ActionReducerMap } from '@ngrx/store';

export interface State {
  companies: string[];
}

const initialState: State = {
  companies: []
}

export function companyReducer(state: State = initialState, action: companyActions.Actions) : State {
  // return state;
  switch(action.type) {
    case companyActions.LOAD_COMPANIES_SUCCESS: {
      return {
        companies: action.payload
      };
    }
    default : {
      return state;
    }
  }
}
