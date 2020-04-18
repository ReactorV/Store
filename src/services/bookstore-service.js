import React from 'react';

class BookstoreService extends React.PureComponent {
    data = [
        {
                id: 3434,
                title: 'JS for Professionals',
                author: 'L. James',
                price: 24,
                coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
            },
            {
                id: 4444,
                title: 'Learn React',
                author: 'L. Jonson',
                price: 33,
                coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
            }
    ];

    getBooks = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    reject(new Error('Woops! Something went wrong'));
                }
                resolve(this.data)
            }, 700);
        });
    };
}

export default BookstoreService;
