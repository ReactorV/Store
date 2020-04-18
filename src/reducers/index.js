const initialState = {
    books: [],
    loading: true,
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.books,
                loading: false
            };
        case 'BOOKS_REQUESTED':
            return {
                books: [],
                loading: true
            };
        case 'BOOKS_ERROR':
            return {
                books: [],
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
};

export default reducer;
