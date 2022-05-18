const INIT_USER = 'INIT_USER';
const LOGOUT_USER = 'LOGOUT_USER';

const initionalState = { user: {} };
// eslint-disable-next-line default-param-last
export const userReducer = (state = initionalState, action) => {
  switch (action.type) {
    case INIT_USER:
      return { ...state, user: action.payload };
    case LOGOUT_USER:
      return { ...state, user: {} };
    default:
      return state;
  }
};
export const initUserAction = (payload) => ({ type: INIT_USER, payload });
export const logoutUserAction = () => ({ type: LOGOUT_USER });
