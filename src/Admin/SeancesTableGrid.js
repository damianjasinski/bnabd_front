import * as React from "react";
import Paper from "@mui/material/Paper";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Container from "@mui/material/Container";
import ClearIcon from "@mui/icons-material/Clear";
import { Button, IconButton } from "@mui/material";
import SeanceSearchBar from "./SeanceSearchBar";

const columns = [
  {
    id: "seans",
    label: "Seans",
    minWidth: 150,
  },
  {
    id: "room",
    label: "Sala",
    minWidth: 150,
    align: "right",
  },
  {
    id: "seans_data",
    label: "Data seansu",
    minWidth: 150,
    align: "right",
  },
  {
    id: "advertisementTime",
    label: "Czas reklam ",
    minWidth: 150,
    align: "right",
  },
  {
    id: "delete",
    label: "Usuń",
    minWidth: 150,
    align: "right",
  },
];

function createData(seans, seans_data, room, advertisementTime, id) {
  return { seans, seans_data, room, advertisementTime, id };
}
const SeancesTableGrid = (props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [originalRows, setOriginalRows] = React.useState(props.seances)
  const [rows, setRows] = React.useState([])

  React.useEffect(() => {
    let xdrows = []
    props.seances.forEach((element) => {
      xdrows.push(
        createData(
          element.titles.name,
          element.seanceDate,
          element.roomId,
          element.advertisementTime,
          element.id,
        )
      );
      setRows(xdrows)
    });
  }, []);
  console.log(rows)


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };
  const setSeanceToDelete = (id) => {
    props.openModal(id)
  };
  const setSearched = (filteredRows) => {
    let newRows = []
    filteredRows.forEach((element) => {
      newRows.push(
        createData(
          element.titles.name,
          element.seanceDate,
          element.roomId,
          element.advertisementTime,
          element.id,
        )
      );
    });
    setRows(newRows)
  }

  return (
    <Container>
      <SeanceSearchBar rows={originalRows} filteredSetter={setSearched} ></SeanceSearchBar>
      <TableContainer sx={{ maxHeight: 650 }}>
        <Table stickyHeader aria-label="sticky table" size="small">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    fontSize: 18,
                    fontWeight: 600,
                    color: "white",
                    backgroundColor: "#995511"
                  }}
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
                        <TableCell
                          key={column.id}
                          align={column.align}
                          sx={{ fontSize: 18, backgroundColor: "#333131", color: "white" }}
                        >
                          {column.id == "delete" ? (
                            <IconButton onClick={() => setSeanceToDelete(row.id)}>
                              <ClearIcon fontSize="large" sx={{ color: 'white' }}></ClearIcon>
                            </IconButton>
                          ) : (
                            ""
                          )}{" "}
                          {value}
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
        style={{ backgroundColor: "#995511 ", color: "white" }}

      />
    </Container>
  );
};

export default SeancesTableGrid;
