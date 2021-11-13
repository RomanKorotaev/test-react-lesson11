import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store'
import {myAction, myAction2, myActionDynamic, myActionDynamic2} from './redux/actions'
import {Provider} from 'react-redux'

//----------------Базовая теория. start---------------
// console.log (' store : ',  store);
// console.log ('0 store.getState() : ',  store.getState() );

// console.log (' store.dispatch(myAction) : ',  store.dispatch(myAction) )
// console.log ('1 store.getState() : ',  store.getState() );

// console.log (' store.dispatch(myAction2) : ',  store.dispatch(myAction2) )
// console.log ('2 store.getState() : ',  store.getState() );

// console.log (' store.dispatch( myActionDynamic( - Some data -)) : ',  store.dispatch( myActionDynamic('Some data')) )
// console.log ('3 store.getState() : ',  store.getState() );

// console.log (' store.dispatch( myActionDynamic2(4) ) : ',  store.dispatch( myActionDynamic2(4)) )
// console.log ('4 store.getState() : ',  store.getState() );
//----------------Базовая теория. end---------------


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
