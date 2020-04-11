import React from 'react';

import BookList from '../../components/book-list';

import './index';

class HomePage extends React.PureComponent {
    render() {
        const books = [
            {
                id: 3434,
                title: 'Learn JS ',
                author: 'L.James'
            },
            {
                id: 4444,
                title: 'Learn React ',
                author: 'L.Jonson'
            }
        ];

        return (
            <BookList books={books}/>
        );
    }
}

export default HomePage;
