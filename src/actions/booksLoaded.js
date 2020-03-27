const booksLoaded = (newBooks) => {
    return {
        type: 'BOOKS_LOADED',
        books: newBooks
    }
};

export {
    booksLoaded
}
