import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable({details}) {
  const classes = useStyles();
  const rows = details;
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Yard Code</TableCell>
            <TableCell align="left">Emplyee Code</TableCell>
            <TableCell align="left">Clock In</TableCell>
            <TableCell align="left">Clock Out</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.yardCode}
              </TableCell>
              <TableCell align="left">{row.employeeCode}</TableCell>
              <TableCell align="left">{row.clockIn}</TableCell>
              <TableCell align="left">{row.clockOut}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
