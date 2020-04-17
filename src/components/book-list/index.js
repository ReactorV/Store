import BookList from './component';

import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc/withBookstoreService';
import { booksLoaded } from '../../actions/booksLoaded';
import utils from '../../utils/utils';

const mapStateToProps = ({ books, loading }) => {
    return { books, loading };
};

const mapDispatchToProps = {
    booksLoaded
};

export default utils.compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);
