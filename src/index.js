import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {createStore} from 'redux'
import reducer from './store/reducer'
import {Provider} from 'react-redux'
import * as serviceWorker from './serviceWorker';


const store = createStore(reducer);

const app = (
    <Provider store = {store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    );

ReactDOM.render(app,document.getElementById('root'));
serviceWorker.unregister();
