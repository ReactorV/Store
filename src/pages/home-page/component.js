import React from 'react';

import BookList from '../../components/book-list';
import ShoppingCartTable from '../../components/shopping-cart-table';

import './index';

class HomePage extends React.PureComponent {
    render() {
        const books = [];

        return (
            <div>
                <BookList books={books}/>
                <ShoppingCartTable />
            </div>
        );
    }
}

export default HomePage;
