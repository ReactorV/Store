import React from 'react';

import './index.css';

class BookListItem extends React.PureComponent {
    render() {
        const { book, onAddedToCart } = this.props;

            return (
                <div className="book-list-item">
                    <div className="book-cover">
                        <img src={book.coverImage} alt=""/>
                    </div>
                    <div className="book-details">
                        <span className="book-title">{book.title}</span>
                        <div>{book.author}</div>
                        <div>{book.price}$</div>
                        <button
                            onClick={onAddedToCart}
                            className="btn btn-info add-to-cart"
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            );
    }
}

export default BookListItem;
