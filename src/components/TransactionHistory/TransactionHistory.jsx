import { PropTypes } from 'prop-types';
import { TransactionItem } from './TransactionItem';
import css from './Transaction.module.css';

export function TransactionHistory({ transactions }) {
    return (
        <div className={css.transactionHistory}>
            <table className={css.transactionTable}>
                <thead className={css.transactionTableHead}>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>
                <tbody className={css.transactionTableBody}>
                    {transactions.map(transaction => (
                        <TransactionItem
                            key={transaction.id}
                            type={transaction.type}
                            amount={transaction.amount}
                            currency={transaction.currency}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ),
};
