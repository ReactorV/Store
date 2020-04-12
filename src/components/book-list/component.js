import React from 'react';

import BoolListItem from '../book-list-item';

import './index';

class BookList extends React.PureComponent {

    componentDidMount() {
        const { bookstoreService } = this.props;

        const books = bookstoreService.getBooks();

        this.props.booksLoaded(books);
    }

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
