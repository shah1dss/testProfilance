const INIT_NEWS = 'INIT_NEWS';
const ADD_NEWS = 'ADD_NEWS';
const DEL_NEWS = 'DEL_NEWS';
const ACCEPT_NEWS = 'ACCEPT_NEWS';

const initialState = { news: [] };

// eslint-disable-next-line default-param-last
export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_NEWS:
      return { ...state, news: action.payload };
    case ADD_NEWS:
      return { ...state, news: [...state.news, action.payload] };
    case DEL_NEWS:
      return { ...state, news: [...state.news.filter((news) => news.id !== action.payload)] };
    case ACCEPT_NEWS:
      return {
        ...state,
        news: state.news.map((item) => {
          if (item.id === action.payload) {
            item.status = true;
            return item;
          } return item;
        }),
      };
    default:
      return state;
  }
};

export const initnewsAC = (payload) => ({ type: INIT_NEWS, payload });
export const addnewsAC = (payload) => ({ type: ADD_NEWS, payload });
export const delNewsAC = (payload) => ({ type: DEL_NEWS, payload });
export const acceptNewsAC = (payload) => ({ type: ACCEPT_NEWS, payload });
