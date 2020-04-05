import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { authReducer } from './reducers/authReducer';

const reducers = {
  form: formReducer,
  auth: authReducer
};

const rootReducer = combineReducers(reducers);

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
);

export default store;