import React, { useState } from 'react';
import { connect } from 'react-redux';

import TransactionsTable from '../components/TransactionsTable';

const SummaryPage = ({
    transactions
}) => {

    const [numberOfTransactions, setNumberOfTransactions] = useState(transactions.length)

    return (<div>
    <h1>Summary Page</h1>
        <TransactionsTable />

        <br />
        <body>
            <b>Number of transactions: {numberOfTransactions}</b>
        </body>
    </div>
    );
}

const mapState = ({ core }) => ({
    transactions: core.transactions
  });

  export default connect(mapState)(SummaryPage);