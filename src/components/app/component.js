import React from 'react';

import { Route, Switch } from 'react-router-dom';

import HomePage from '../../pages/home-page';
import CartPage from '../../pages/cart-page';

import { withBookstoreService } from '../hoc/withBookstoreService';

import './index'

const App = () => {
    return (
        <Switch>
            <Route
                path="/"
                component={HomePage}
                exact={true}
            />
            <Route
                path="/cart"
                component={CartPage}
            />
        </Switch>
    )
};

export default withBookstoreService()(App);
