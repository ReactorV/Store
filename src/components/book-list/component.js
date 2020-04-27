import React from 'react';

import BookListItem from '../book-list-item';
import Preloader from '../preloader';
import ErrorIndicator from '../error-indicator';

import './index.css';

const BookList = ({ books, onAddedToCart }) => {
    return (
        <ul className="book-list">
            {
                books.map((book) => {
                    return (
                        <li key={book.id}>
                            <BookListItem
                                onAddedToCart={() => onAddedToCart(book.id)}
                                book={book}/>
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
        const { books, loading, error, onAddedToCart } = this.props;

        if (loading) {
            return <Preloader />
        }

        if (error) {
            return <ErrorIndicator />
        }

        return (
            <BookList
                onAddedToCart={onAddedToCart}
                books={books} />
        );
    }
}



export default BookListContainer;
