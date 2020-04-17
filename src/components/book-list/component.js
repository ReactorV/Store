import React from 'react';

import BoolListItem from '../book-list-item';
import Preloader from '../preloader';

import './index.css';

class BookList extends React.PureComponent {

    componentDidMount() {
        const { bookstoreService, booksLoaded } = this.props;

        bookstoreService.getBooks()
            .then((books) => {
                booksLoaded(books);
            })
            .catch((error) => {
                console.log(error);
            });


    }

    render() {
        const { books, loading } = this.props;

        if (loading) {
            return <Preloader />
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
}

export default BookList;
