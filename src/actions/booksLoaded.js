const booksLoaded = (newBooks) => {
    return {
        type: 'BOOKS_LOADED',
        books: newBooks
    }
};

const booksRequested = () => {
    return {
        type: 'BOOKS_REQUESTED'
    }
};

const booksError = (error) => {
    return {
        type: 'BOOKS_ERROR',
        error: error
    }
};

export {
    booksLoaded,
    booksRequested,
    booksError
}
