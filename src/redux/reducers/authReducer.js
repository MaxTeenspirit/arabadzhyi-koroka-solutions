const initialState = {
  registered: false,
  signin: false
};

export function authReducer(state = initialState, action) {
  switch (action.type){
    case 'REGISTRATE': {
      return {
        ...state,
        registered: true
      }
    }
    case 'SIGNIN': {
      return {
        ...state,
        signin: true
      }
    }
    default: return state;
  }
}