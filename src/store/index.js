import  {createStore} from 'redux';  //cria o estado globaç

import rootReducer from './reducers'  //já importa o index

const store = createStore(rootReducer);

export default store;

