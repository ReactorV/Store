import BookList from './component';

import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc/withBookstoreService';
import { booksLoaded, booksRequested, booksError } from '../../actions/booksLoaded';
import utils from '../../utils/utils';

const mapStateToProps = ({ books, loading, error }) => {
    return { books, loading, error };
};

const mapDispatchToProps = {
    booksLoaded,
    booksRequested,
    booksError
};

export default utils.compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);
