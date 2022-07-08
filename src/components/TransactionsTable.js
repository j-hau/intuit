import React, { useState } from 'react';
import { connect } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TransactionsTable = ({
    transactions
}) => {
    return (<div>
    <h2>Transactions</h2>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell align="right">description</TableCell>
                    <TableCell align="right">Ref number</TableCell>
                    <TableCell align="right">Amount</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {transactions.map((transaction) => (
                    <TableRow
                    key={transaction.refNumber}
                    >
                    <TableCell component="th" scope="row">
                        {transaction.date}
                    </TableCell>
                    <TableCell align="right">{transaction.description}</TableCell>
                    <TableCell align="right">{transaction.refNumber}</TableCell>
                    <TableCell align="right">{transaction.amount}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
    );
}

const mapState = ({ core }) => ({
    transactions: core.transactions
  });
  
  const mapDispatch = ({ core: { incrementCounter } }) => ({
    incrementCounter: (value) => incrementCounter(value),
  });
  
  export default connect(mapState, mapDispatch)(TransactionsTable);