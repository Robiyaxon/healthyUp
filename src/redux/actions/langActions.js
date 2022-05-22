import { LANG_CHANGED } from "./types";

export const changeLanguage = (lang) => (dispatch) => {
  dispatch({
    type: LANG_CHANGED,
    payload: lang,
  });
};
