import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  {
    id: 'date',
    label: 'Date',
    align: 'center',
    minWidth: 100,
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'transaction',
    label: 'Transaction Hash',
    align: 'center',
    minWidth: 10,
    maxWidth: 20,
    style: { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' },
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'from',
    label: 'From',
    align: 'center',
    minWidth: 170,
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'to',
    label: 'To',
    align: 'center',
    minWidth: 170,
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'value',
    label: 'Value (ETH)',
    align: 'center',
    minWidth: 170,
    format: (value) => value.toFixed(9),
  },
  {
    id: 'fee',
    label: 'Fee',
    align: 'center',
    minWidth: 170,
    format: (value) => value.toFixed(8),
  },
];

function createData(date, transaction, from, to, value, fee) {
  return { date, transaction, from, to, value, fee };
}

const rows = [
  createData('2023-08-23', '0x91d6dfcfa17788..', 'builder', 'lidowallet', 5.423, 0.0003234),
  createData('2023-08-22', '0xabcdef12345678..', 'builder', 'lidowallet', 10.123, 0.0012345),
  createData('2023-08-21', '0x567890abcdef12..', 'builder', 'hotwallet', 8.765, 0.0005678),
  createData('2023-08-21', '0x1234567890abcd..', 'builder', 'minerx2c', 15.6789, 0.0007890),
  createData('2023-08-20', '0x89abcdef123456..', 'builder', 'spacetest', 20.9876, 0.0009876),
  createData('2023-08-15', '0xfedcba09876543..', 'builder', 'moonrocket', 7.654, 0.0001234),
  createData('2023-08-12', '0x89abcdef123456..', 'builder', 'spacetest', 20.987, 0.0009876),
  createData('2023-08-11', '0xfedcba09876543..', 'builder', 'moonrocket', 7.654, 0.0001234),
  createData('2023-08-07', '0x1234567890abcd..', 'builder', 'builder', 12.3456, 0.0004321),
  createData('2023-07-05', '0x234567890abcde..', 'builder', 'spacetest', 6.543, 0.0003456),
  createData('2023-07-03', '0x876543210fedcb..', 'builder', 'moonrocket', 13.333, 0.0003333),
  createData('2023-07-02', '0x567890abcdef12..', 'builder', 'spacetest', 8.8888, 0.0008888),
  createData('2023-07-01', '0x234567890abcde..', 'builder', 'moonrocket', 14.444, 0.0004444),
  createData('2023-06-25', '0x1234567890abcd..', 'builder', 'spacetest', 10.123, 0.0012345),
  createData('2023-06-23', '0x567890abcdef12..', 'builder', 'moonrocket', 15.555, 0.0005555),
  createData('2023-06-21', '0xabcdef12345678..', 'builder', 'spacetest', 11.111, 0.0001111),
  createData('2023-06-15', '0x89abcdef123456..', 'builder', 'moonrocket', 16.666, 0.0006666),
  createData('2023-05-22', '0x4567890abcdef1..', 'builder', 'spacetest', 12.222, 0.0002222),
  createData('2023-05-19', '0x0987654321fedc..', 'builder', 'moonrocket', 17.777, 0.0007777),
  createData('2023-04-21', '0x67890abcdef123..', 'builder', 'spacetest', 13.888, 0.0008888),
  createData('2023-03-23', '0xcdef1234567890..', 'builder', 'moonrocket', 18.888, 0.0009999),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '40px' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
