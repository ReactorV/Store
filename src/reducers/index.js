const initialState = {
    books: [],
    loading: true,
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_SUCCESS':
            return {
                books: action.books,
                loading: false
            };
        case 'FETCH_BOOKS_REQUEST':
            return {
                books: [],
                loading: true
            };
        case 'FETCH_BOOKS_FAILURE':
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
