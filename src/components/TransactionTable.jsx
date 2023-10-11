import React, { useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination } from '@mui/material';
import { useTransactions } from '../Hooks/useTransactions'; // Import the custom hook

const columns = [
  { id: 'Transaction', label: 'Transaction Hash', minWidth: 170 },
  { id: 'from_address', label: 'From', minWidth: 170 },
  { id: 'to_address', label: 'To', minWidth: 170 },
  { id: 'Value', label: 'Value (ETH)', minWidth: 170, format: (value) => (value / 1e18).toFixed(9) },
  { id: 'Fee', label: 'Fee', minWidth: 170, format: (value) => (value / 1e18).toFixed(9) },
];

export default function TransactionTable({ searchInput }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { transactions, error } = useTransactions(searchInput); // Use the custom hook

  if (error) {
    console.error('Error fetching data: ', error);
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '40px' }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align="center"
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.Transaction}>
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <TableCell key={column.id} align="center">
                      {column.format && typeof value === 'number' ? column.format(value) : value}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={transactions.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}










// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination } from '@mui/material';
// import SearchBar from './SearchBar';

// const columns = [
//   { id: 'Transaction', label: 'Transaction Hash', minWidth: 170 },
//   { id: 'from_address', label: 'From', minWidth: 170 },
//   { id: 'to_address', label: 'To', minWidth: 170 },
//   { id: 'Value', label: 'Value (ETH)', minWidth: 170, format: (value) => (value / 1e18).toFixed(9) },
//   { id: 'Fee', label: 'Fee', minWidth: 170, format: (value) => (value / 1e18).toFixed(9) },
// ];

// export default function TransactionTable({searchInput}) {
//   const [rows, setRows] = useState([]);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);

//   const fetchData = async (address) => {
//     console.log('fetchData called with address:', address); // Debugging log
//     try {
//       const response = await axios.get(`http://localhost:5001/api/transactions?address=${address}`);
//       const uniqueData = Array.from(new Set(response.data.map(a => a.Transaction)))
//         .map(id => response.data.find(a => a.Transaction === id));
//       setRows(uniqueData);
//     } catch (error) {
//       console.error('Error fetching data: ', error);
//     }
//   };

//   console.log('is fetchData a function?', typeof fetchData === 'function');

//   useEffect(() => {
//     fetchData(searchInput); // Default address to fetch initial data
//   }, [searchInput]);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };
//   const print = (msg) => {
//     console.log(msg)
//   }
//   return (
//     <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '40px' }}>
//       <SearchBar fetchData={fetchData}/>
//       <TableContainer>
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   key={column.id}
//                   align="center"
//                   style={{ minWidth: column.minWidth }}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
//               <TableRow hover role="checkbox" tabIndex={-1} key={row.Transaction}>
//                 {columns.map((column) => {
//                   const value = row[column.id];
//                   return (
//                     <TableCell key={column.id} align="center">
//                       {column.format && typeof value === 'number' ? column.format(value) : value}
//                     </TableCell>
//                   );
//                 })}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[10, 25, 100]}
//         component="div"
//         count={rows.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Paper>
//   );
// }
