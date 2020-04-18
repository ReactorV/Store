import React from 'react';

import BoolListItem from '../book-list-item';
import Preloader from '../preloader';
import ErrorIndicator from '../error-indicator';

import './index.css';

class BookList extends React.PureComponent {
    componentDidMount() {
        this.loadBooks();
    }

    render() {
        const { books, loading, error } = this.props;

        if (loading) {
            return <Preloader />
        }

        if (error) {
            return <ErrorIndicator />
        }

        return (
                <ul className="book-list">
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

    loadBooks = () => {
        const {
            bookstoreService,
            booksLoaded,
            booksRequested,
            booksError
        } = this.props;

        booksRequested();
        bookstoreService.getBooks()
            .then((books) => {
                booksLoaded(books);
            })
            .catch((error) => {
                booksError(error);
            });
    }
}

export default BookList;
