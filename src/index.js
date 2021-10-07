import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Redux imports here
// import { Provider } from 'react-redux';
// import {createStore} from 'redux';
// import  reducers  from './Redux_practice/reducer/reducer';
// Redux Impors ends here
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import MainReduxComponent from './Redux_practice/MainReduxCompo';

// object required in Redux..... Called as store
// let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());


ReactDOM.render(
  <React.StrictMode>
    {/* Hospital Management Dependencies here.... */}
    <BrowserRouter>
    <App />
    </BrowserRouter>
    {/* Hospital Management Dependencied Ends here...... */}
      {/* <Provider store={store}>
        <MainReduxComponent/>
      </Provider> */}
    {/* Redux Dependencies Starts here.... */}

    {/* Redux Dependencies Ends here...... */}

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
