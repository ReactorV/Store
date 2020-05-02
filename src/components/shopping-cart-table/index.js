import ShoppingCartTable from './component';
import { connect } from 'react-redux';

import { deleteBookFromCart, addBookToCart, deleteAllBooksFromCart } from '../../actions/booksLoaded';

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal }}) => {
    return {
        items: cartItems,
        total: orderTotal
    }
};

const mapDispatchToProps = {
    onIncrease: addBookToCart,
    onDecrease: deleteBookFromCart,
    onDelete: deleteAllBooksFromCart
};


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
