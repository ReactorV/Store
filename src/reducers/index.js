const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 210
};

const updateBook = (book, bookInCart) => {
    const {
        id = book.id,
        title = book.title,
        count = 0,
        total = 0
    } = bookInCart;

    return {
        id,
        title,
        count: count + 1,
        total: total + book.price
    }
};

const updateBooks = (cartItems, newBook, index) => {
    if (index !== -1) {
        return [
            ...cartItems.slice(0, index),
            newBook,
            ...cartItems.slice(index + 1)
        ];
    } else {
        return [...cartItems, newBook];
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.books,
                loading: false
            };
        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
                books: [],
                loading: true
            };
        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                books: [],
                loading: false,
                error: action.error
            };

        case 'ADD_BOOK_TO_CART':
            const bookId = action.bookId;
            const book = state.books.find(book => bookId === book.id);
            const bookInCart = state.cartItems.find(bookInCart => bookInCart.id === bookId) || {};

            const indexBookInCart = state.cartItems.indexOf(bookInCart);

            const newBook = updateBook(book, bookInCart);

            return {
                ...state,
                cartItems: updateBooks(state.cartItems, newBook, indexBookInCart)
            };

        default:
            return state;
    }
};

export default reducer;
