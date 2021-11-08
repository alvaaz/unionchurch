import { validate } from './validate';

export const initialState = {
  email: '',
  firstname: '',
  lastname: '',
  canISend: false,
  emailError: null,
  firstnameError: null,
  lastnameError: null,
  isLoading: false,
  successMessage: '',
  error: '',
};

export const actions = {
  fieldsChanged: 'FIELDS_CHANGED',
  formSubmitted: 'FORM_SUBMITTED',
  submitSuccess: 'SUCCESS',
  submitError: 'ERROR',
};

export function reducer(state, action) {
  let error;
  switch (action.type) {
    case actions.fieldsChanged: {
      error = validate(action.fieldName, action.payload);
      return {
        ...state,
        [action.fieldName]: action.payload,
        [action.fieldName + 'Error']: error,
        error: '',
        successMessage: '',
        canISend:
          !state.firstnameError && !state.lastnameError && !state.emailError,
      };
    }

    case actions.formSubmitted: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case actions.submitSuccess: {
      return {
        ...state,
        isLoading: false,
        successMessage: action.payload,
        email: '',
        firstname: '',
        lastname: '',
        emailError: true,
        firstnameError: true,
        lastnameError: true,
        canISend: false,
      };
    }

    case actions.submitError: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        canISend: false,
      };
    }
    default:
      return state;
  }
}
