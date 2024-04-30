import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { green } from "@mui/material/colors";
import "./styles.css";

const StyledTableCell = styled(TableCell)({
  '&.custom-table-head': {
    backgroundColor: '#E8ECED',
    color: 'black',
    borderBottom: '1px solid black',
    borderTop: '1px solid #CDD6DB',
  },
  '&.custom-table-body': {
    fontSize: '14px',
  },
});

const StyledTableRow = styled(TableRow)({
  '&.custom-table-row:nth-of-type(odd)': {
    backgroundColor: 'white',
  },
});

function createData(status, name, goods, freight, total, cur, base) {
  return { status, name, goods, freight, total, cur, base };
}

const rows = [
  createData(
    <Avatar
      sx={{
        bgcolor: green[500],
        fontSize: "12px",
        width: "22px",
        height: "22px",
      }}
    >
      TQ
    </Avatar>,
    "Engineering Co. Ltd",
    " 3,459.70",
    "0.00",
    "3,459.70",
    "EUR",
    "3,811.92"
  ),
  createData(
    <Avatar
      sx={{
        bgcolor: green[500],
        fontSize: "12px",
        width: "22px",
        height: "22px",
      }}
    >
      TQ
    </Avatar>,
    "Fintec Co. Ltd - SPARES",
    "4,370.60",
    "0.00",
    "4,370.60",
    "USD",
    "4,370.60"
  ),
];

export default function SuppliesTable() {
  return (
    <TableContainer component={Paper} className="summaryTable">
      <Table className="custom-table" aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell className="custom-table-head">Status</StyledTableCell>
            <StyledTableCell className="custom-table-head">Supplier Name</StyledTableCell>
            <StyledTableCell className="custom-table-head">Goods</StyledTableCell>
            <StyledTableCell className="custom-table-head">Freight</StyledTableCell>
            <StyledTableCell className="custom-table-head">Total</StyledTableCell>
            <StyledTableCell className="custom-table-head">Cur</StyledTableCell>
            <StyledTableCell className="custom-table-head">Base (USD)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index} className="custom-table-row">
              <StyledTableCell className="custom-table-body" component="th" scope="row">
                {row.status}
              </StyledTableCell>
              <StyledTableCell className="custom-table-body">{row.name}</StyledTableCell>
              <StyledTableCell className="custom-table-body">{row.goods}</StyledTableCell>
              <StyledTableCell className="custom-table-body">{row.freight}</StyledTableCell>
              <StyledTableCell className="custom-table-body">{row.total}</StyledTableCell>
              <StyledTableCell className="custom-table-body">{row.cur}</StyledTableCell>
              <StyledTableCell className="custom-table-body">{row.base}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
