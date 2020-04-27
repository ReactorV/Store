import ShoppingCartTable from './component';
import { connect } from 'react-redux';

const mapStateToProps = ({cartItems, orderTotal}) => {
    return {
        items: cartItems,
        total: orderTotal
    }
};

const mapDispatchToProps = () => {
    return {
        onIncrease: (id) => {
            console.log(`increase ${id}`)
        },
        onDecrease: (id) => {
            console.log(`decrease ${id}`)
        },
        onDelete: (id) => {
            console.log(`delete ${id}`)
        },
    }

};


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
