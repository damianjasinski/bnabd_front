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


const columns = [
  {
    id: "id",
    label: "Id",
    minWidth: 150,
  },
  {
    id: "createdAt",
    label: "Data utworzenia",
    minWidth: 150,
    align: "right",
  },
  {
    id: "email",
    label: "E-mail",
    minWidth: 150,
    align: "right",
  },
  {
    id: "role",
    label: "Rola",
    minWidth: 150,
    align: "right",
  },
  {
    id: "firstName",
    label: "Imie",
    minWidth: 150,
    align: "right",
  },
  {
    id: "surName",
    label: "Nazwisko",
    minWidth: 150,
    align: "right",
  },
];
function createData(id, createdAt, email, role, firstName, surName) {
  return { id, createdAt, email, role, firstName, surName };
}
const UsersTableGrid = (props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const rows = [];

  props.users.forEach((element) => {
    rows.push(
      createData(
        element.id,
        element.createdAt,
        element.email,
        element.role,
        element.userFirstname,
        element.userSurname
      )
    );
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Container>
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
                    backgroundColor: "#995511",
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
                          sx={{
                            fontSize: 18,
                            backgroundColor: "#333131",
                            color: "white",
                          }}
                        >
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

export default UsersTableGrid;
