// import logo from './logo.svg';
import './App.css';
import router from './router/router';
import MainPreLogin from './screens/Main/Main';
import Routers from './router/router'

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store,persistor} from './Redux/store';
import Loader from './components/Loader/loader'

function App_OLD() {
  console.log("++ Inside App ++ ")
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <MainPreLogin/> */}
        <>
        <Routers/>
        </>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
    </div>
  );
}

function App() {
  console.log("++ Inside App ++ ")
  return (
    <div className="App">
      
        <Provider store={store}>
          <PersistGate loading={<Loader/>} persistor={persistor}>
            <>
              <Routers/>
            </>
          </PersistGate>
        </Provider>
        
    </div>
  );
}

export default App;
