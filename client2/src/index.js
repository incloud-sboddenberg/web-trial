import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import thunk from 'redux-thunk'

import { BrowserRouter } from 'react-router-dom' 
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'


// used for Redux Dev Tool extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['loggedUser']
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

const persistor = persistStore(store)

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <App /> 
            </BrowserRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root'));




registerServiceWorker();
