const SET_SINGLE_PERSON = "SET_SINGLE_PERSON";
let initialState = {
    person: null,
};
const PersonReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_SINGLE_PERSON:
            return { ...state, person: action.person };

        default:
            return state;
    }
};
export const setPersonSingle = (person) => ({ type: SET_SINGLE_PERSON, person });
export default PersonReduser;
