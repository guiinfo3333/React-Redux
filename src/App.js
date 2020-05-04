import React,{Component} from 'react';
import {Provider} from 'react-redux';  //forma de passar aos componentes um tipo de informacao
import Sidebar from './components/SideBar';
import Video from './components/Video';
import store from './store';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Provider store={store}>      
        <Video />
        <Sidebar />
        </Provider>
      </div>
    )

  }    
  
}

export default App;
