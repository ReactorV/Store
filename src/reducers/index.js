const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 210
};

const updateBook = (book, bookInCart, quantity) => {
    const {
        id = book.id,
        title = book.title,
        count = 0,
        total = 0
    } = bookInCart;

    return {
        id,
        title,
        count: count + quantity,
        total: total + quantity * book.price
    }
};

const updateBooks = (cartItems, newBook, index) => {
    if (newBook.count === 0) {
        return [
            ...cartItems.slice(0, index),
            ...cartItems.slice(index + 1)
        ];
    }

    if (index !== -1) {
        return [
            ...cartItems.slice(0, index),
            newBook,
            ...cartItems.slice(index + 1)
        ];
    }

    return [...cartItems, newBook];
};

const updateOrder = (state, bookId, quantity) => {
    const { books, cartItems } = state;

    const book = books.find(book => book.id === bookId);
    const bookInCart = cartItems.find(bookInCart => bookInCart.id === bookId) || {};
    const indexBookInCart = cartItems.indexOf(bookInCart);

    const newBook = updateBook(book, bookInCart, quantity);

    return {
        ...state,
        cartItems: updateBooks(state.cartItems, newBook, indexBookInCart)
    };
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
            return updateOrder(state, action.bookId, 1);

        case 'DELETE_ALL_BOOKS_FROM_CART':
            const book = state.cartItems.find(book => book.id = action.bookId);

            return updateOrder(state, action.bookId, -book.count);

        case 'DELETE_BOOK_FROM_CART':
            return updateOrder(state, action.bookId, -1);
        default:
            return state;
    }
};

export default reducer;
