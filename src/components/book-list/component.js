import React from 'react';

import BoolListItem from '../book-list-item';

import './index';

class BookList extends React.PureComponent {
    render() {
        const { books } = this.props;

        return (
                <ul>
                    {
                        books.map((book) => {
                            return (
                                <li key={book.id}>
                                    <BoolListItem book={book}/>
                                </li>
                            );
                        })
                    }
                </ul>
        );
    }
}

export default BookList;
