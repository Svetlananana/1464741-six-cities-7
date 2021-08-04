import {combineReducers} from 'redux';
import {main} from './main/main';
import {data} from './data/data';
import {user} from './user/user';

export const NameSpace = {
  MAIN: 'MAIN',
  DATA: 'DATA',
  USER: 'USER',
};

export default combineReducers({
  [NameSpace.MAIN]: main,
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user,
});
