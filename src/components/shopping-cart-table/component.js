import React from 'react';

import './index.css';

class ShoppingCartTable extends React.PureComponent {
    render () {
        const { total } = this.props;

        const cartBooksOutput = this.renderCartBooks();

        return (
            <div className="shopping-cart-table">
                <h2>Your Order</h2>
                <table className="table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>

                    <tbody>
                        {cartBooksOutput}
                    </tbody>
                </table>

                <div className="total">
                    Total: ${total}
                </div>
            </div>
        );
    }

    renderCartBooks = () => {
        const { items, onIncrease, onDecrease, onDelete } = this.props;

        return items.map((item, index) => {
            const { id, title, count, total } = item;

            return (
                <tr key={id}>
                    <td>{index + 1}</td>
                    <td>{title}</td>
                    <td>{count}</td>
                    <td>${total}</td>
                    <td>
                        <button
                            onClick={() => onDelete(id)}
                            className="btn btn-outline-danger btn-sm float-right">
                            <i className="fa fa-trash-o" />
                        </button>
                        <button
                            onClick={() => onIncrease(id)}
                            className="btn btn-outline-success btn-sm float-right">
                            <i className="fa fa-plus-circle" />
                        </button>
                        <button
                            onClick={() => onDecrease(id)}
                            className="btn btn-outline-warning btn-sm float-right">
                            <i className="fa fa-minus-circle" />
                        </button>
                    </td>
                </tr>
            );
        });
    }
}

export default ShoppingCartTable;
