import BookListContainer from './component';

import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc/withBookstoreService';
import { fetchBooks } from '../../actions/booksLoaded';
import utils from '../../utils/utils';

const mapStateToProps = ({ books, loading, error }) => {
    return { books, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookstoreService } = ownProps;

    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch)
    };
};

export default utils.compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
