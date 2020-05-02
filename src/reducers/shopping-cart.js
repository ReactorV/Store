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
    const { bookList: { books }, shoppingCart: { cartItems }} = state;

    const book = books.find(book => book.id === bookId);
    const bookInCart = cartItems.find(bookInCart => bookInCart.id === bookId) || {};
    const indexBookInCart = cartItems.indexOf(bookInCart);

    const newBook = updateBook(book, bookInCart, quantity);

    return {
        orderTotal: 0,
        cartItems: updateBooks(cartItems, newBook, indexBookInCart)
    };
};

const updateShoppingCart = (state, action) => {
    if (state === undefined) {
        return {
            orderTotal: 0,
            cartItems: []
        }
    }

    switch (action.type) {
        case 'ADD_BOOK_TO_CART':
            return updateOrder(state, action.bookId, 1);

        case 'DELETE_ALL_BOOKS_FROM_CART':
            const book = state.shoppingCart.cartItems.find(book => book.id = action.bookId);

            return updateOrder(state, action.bookId, -book.count);

        case 'DELETE_BOOK_FROM_CART':
            return updateOrder(state, action.bookId, -1);

        default:
            return state.shoppingCart;
    }
};

export default updateShoppingCart;
