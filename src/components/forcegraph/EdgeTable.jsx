/* Desc: Table for displaying selected transaction between graph nodes. Currently replaced with dummy alert */

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, id, amount) {
  return { name, id, amount };
}

const rows = [
  createData('2023-05-21', 123, 1.2),
  createData('2023-03-19', 123, 2),
  createData('2023-02-23', 123, 3.4),
  createData('2023-01-11', 123, 1.2),
];

export default function DenseTable() {
  return (

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Transaction</TableCell>
            <TableCell align="right">Amount&nbsp;(ETH)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}