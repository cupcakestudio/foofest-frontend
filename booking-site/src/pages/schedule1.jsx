import stylesSchedule from "../styles/Schedule.module.css";
import { useState } from "react";

// MUI

import * as React from "react";
import { Paper, Table } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "name", label: "Stages", minWidth: 170 },
  { id: "code", label: "10:00 - 12:00", minWidth: 100 },
  {
    id: "population",
    label: "12:00 - 14:00",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "14:00 - 16:00",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "16:00 - 18:00",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "density",
    label: "18:00 - 20:00",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "density",
    label: "20:00 - 22:00",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "density",
    label: "22:00 - 00:00",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [createData("Midgard", "IN", 1324171354, 3287263), createData("Vanaheim", "CN", 1403500365, 9596961), createData("Jotunheim", "IT", 60483973, 301340)];

export default function StickyHeadTable() {
  const [day, setDay] = useState("Monday");
  //filter for button days
  function changeDay(event) {
    if (event.target.value === "Monday") {
      setDay("Monday");
      console.log(day);
    }
    if (event.target.value === "Tuesday") {
      setDay("Tuesday");
      console.log(day);
    }
    if (event.target.value === "Wednesday") {
      setDay("Wednesday");
      console.log(day);
    }
    if (event.target.value === "Thursday") {
      setDay("Thursday");
      console.log(day);
    }
    if (event.target.value === "Friday") {
      setDay("Friday");
      console.log(day);
    }
    if (event.target.value === "Saturday") {
      setDay("Saturday");
      console.log(day);
    }
    if (event.target.value === "Sunday") {
      setDay("Sunday");
      console.log(day);
    }
  }

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
    <>
      <h1>Schedule</h1>
      {/* schedule timetable */}
      {/* BUTTONS TO CHOOSE DAYS */}
      <div className={stylesSchedule.days}>
        <button onClick={changeDay} value="Monday">
          Monday
        </button>
        <button onClick={changeDay} value="Tuesday">
          Tuesday
        </button>
        <button onClick={changeDay} value="Wednesday">
          Wednesday
        </button>
        <button onClick={changeDay} value="Thursday">
          Thursday
        </button>
        <button onClick={changeDay} value="Friday">
          Friday
        </button>
        <button onClick={changeDay} value="Saturday">
          Saturday
        </button>
        <button onClick={changeDay} value="Sunday">
          Sunday
        </button>
      </div>
      <p className={stylesSchedule.dayName}>{day}</p>

      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number" ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}
