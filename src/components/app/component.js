import React from 'react';

import { Route, Switch } from 'react-router-dom';

import HomePage from '../../pages/home-page';
import CartPage from '../../pages/cart-page';
import ShopHeader from '../shop-header';

import { withBookstoreService } from '../hoc/withBookstoreService';

import './index'

const App = () => {
    return (
        <div role="main" className="container">
            <ShopHeader numItems={5} total={200} />
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
        </div>
    )
};

export default withBookstoreService()(App);
