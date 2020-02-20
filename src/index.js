import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import axios from 'axios';

// Setting default configurations
// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
// axios.defaults.headers.common['Authorization'] = 'Auth token';
// axios.defaults.headers.post['Content-Type'] = 'application/json';

// axios.interceptors.request.use(request => {
//     console.log('request:::', request);
//     //edit request config
//     return request;
// }, error => {
//     console.log('Errr:::', error);
//     return Promise.reject(error);
// });

// Getting rid of interceptors
// const myInterceptor = axios.interceptors.request.use(function () {/*...*/});
// axios.interceptors.request.eject(myInterceptor);

// axios.interceptors.response.use(response => {
//     console.log('response:::', response);
//     //edit response config
//     return response;
// }, error => {
//     console.log('Errr:::', error);
//     return Promise.reject(error);
// });

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
