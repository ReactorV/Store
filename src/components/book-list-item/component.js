import React from 'react';

import './index';

class BookListItem extends React.PureComponent {
    render() {
        const { book } = this.props;

            return (
                <>
                    <span>{book.title}</span>
                    <span>{book.author}</span>
                </>
            );
    }
}

export default BookListItem;
