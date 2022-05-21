import { LANG_CHANGED } from "./actions/types";
const defaultLang = localStorage.getItem("lang")
  ? localStorage.getItem("lang")
  : "uz";
const initialState = {
  language: defaultLang,
  error: {},
};

function langReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LANG_CHANGED:
      return {
        ...state,
        language: payload,
      };
    default:
      return state;
  }
}

export default langReducer;
