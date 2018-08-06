
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Link, Match, Redirect, Switch } from 'react-router-dom';
import axios from 'axios';
import "semantic-ui-css/semantic.css";

import reducers from './reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import FixedMenuLayout from './layouts/fixed_menu_layout';
import './assets/app/css/custom.css';

import Payment from './containers/payment/new';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

export const store = createStoreWithMiddleware(reducers)

const LayoutRoute = ({component: Component, ...rest}) => {
    return (
      <Route {...rest} render={matchProps => (
        <FixedMenuLayout>
            <Component {...matchProps} />
        </FixedMenuLayout>
      )} />
    )
};

ReactDOM.render(
    <Provider store={store}>
        <Router> 
            <Switch> 
                <Route path="/payment" component={Payment}/>
                <LayoutRoute path="/" component={App}/> 
            </Switch>
        </Router>
    </Provider>,
document.getElementById('root'));
registerServiceWorker();