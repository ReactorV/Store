import BookListContainer from './component';

import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc/withBookstoreService';
import { fetchBooks, addBookToCart } from '../../actions/booksLoaded';
import utils from '../../utils/utils';

const mapStateToProps = ({ books, loading, error }) => {
    return { books, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookstoreService } = ownProps;

    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAddedToCart: (Id) => dispatch(addBookToCart(Id))
    };
};

export default utils.compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
