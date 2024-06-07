import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function TableData({tableData}) {
  return (
    <div className="table-container">
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell><b>ID</b></TableCell>
                <TableCell ><b>Name</b></TableCell>
                <TableCell ><b>Username</b></TableCell>
                <TableCell ><b>Email</b></TableCell>
                <TableCell ><b>Phone</b></TableCell>
                <TableCell ><b>Address</b></TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {tableData.map((item) => (
                <TableRow
                key={item.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {item.id}
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.username}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>{item.address.city}</TableCell>
                {/* <TableCell>{row.protein}</TableCell> */}
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
  );
}
