import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function createData(name, origin, id) {
  return { name, origin, id };
}

export const TableCat = (props) => {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  const cats = props.props;

  const filteredCats = cats.filter((cat) => {
    if (cat.name.toLowerCase().includes(inputText)) {
      return cat;
    }
    return null;
  });

  const rows = filteredCats.map((cat) => {
    return createData(cat.name, cat.origin, cat.reference_image_id);
  });

  return (
    <>
      <SearchBar inputHandler={inputHandler} />
      <TableContainer className="mb-20">
        <Table
          sx={{ maxWidth: 650 }}
          aria-label="simple table"
          className="m-auto border-2"
        >
          <TableHead className="bg-blue-400/70">
            <TableRow>
              <TableCell>Cat Breed</TableCell>
              <TableCell align="left">Origin</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="bg-blue-200/70">
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.origin}</TableCell>
                <TableCell align="left">
                  <Link
                    to={`/cat/${row.id}`}
                    className="text-m text-white p-2 font-mono bg-blue-500 inline rounded-full animate-pulse"
                  >
                    Link
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
