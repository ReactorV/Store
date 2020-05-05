import BookListContainer from './component';

import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc/withBookstoreService';
import { fetchBooks, addBookToCart } from '../../actions/booksLoaded';
import { bindActionCreators } from 'redux';
import utils from '../../utils/utils';

const mapStateToProps = ({ bookList: { books, loading, error }}) => {
    return { books, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookstoreService } = ownProps;

    return bindActionCreators({
        fetchBooks: fetchBooks(bookstoreService),
        onAddedToCart: addBookToCart
    }, dispatch);
};

export default utils.compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
