import React from 'react';

class BookstoreService extends React.PureComponent {
    getBooks = () => {
        return [
            {
                id: 3434,
                title: 'Learn JS',
                author: 'L. James'
            },
            {
                id: 4444,
                title: 'Learn React',
                author: 'L. Jonson'
            }
        ]
    };
}

export default BookstoreService;
