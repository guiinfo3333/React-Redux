import {combineReducers} from 'redux';  //serve para quando eu tenho varios reducers

import course from './course';


export default combineReducers({
course,
});

//agora todas as chamadas eu vou que colocar o course na frente