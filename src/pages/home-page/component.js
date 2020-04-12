import React from 'react';

import BookList from '../../components/book-list';

import './index';

class HomePage extends React.PureComponent {
    render() {
        const books = [

        ];

        return (
            <BookList books={books}/>
        );
    }
}

export default HomePage;
