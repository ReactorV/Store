import React from 'react';

import BoolListItem from '../book-list-item';
import Preloader from '../preloader';
import ErrorIndicator from '../error-indicator';

import './index.css';

const BookList = ({ books }) => {
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
};

class BookListContainer extends React.PureComponent {
    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const { books, loading, error } = this.props;

        if (loading) {
            return <Preloader />
        }

        if (error) {
            return <ErrorIndicator />
        }

        return <BookList books={books} />
    }
}



export default BookListContainer;
