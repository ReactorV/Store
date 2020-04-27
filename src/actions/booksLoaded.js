const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    }
};

const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        books: newBooks
    }
};

const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        error: error
    }
};

const addBookToCart = (bookId) => {
    return {
        type: 'ADD_BOOK_TO_CART',
        bookId: bookId
    }
};

const fetchBooks = (bookstoreService, dispatch) => () => {
      dispatch(booksRequested());
      bookstoreService.getBooks()
        .then((books) => {
            dispatch(booksLoaded(books));
        })
        .catch((error) => {
            dispatch(booksError(error));
        });
};

export {
    fetchBooks,
    addBookToCart
};
