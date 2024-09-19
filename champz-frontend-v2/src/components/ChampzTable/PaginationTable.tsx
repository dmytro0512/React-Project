import React, { useState } from "react";
import { ChampzTable } from "./ChampzTable";
import { ChampzTableBody } from "./ChampzTableBody";
import { ChampzTableCell } from "./ChampzTableCell";
import { ChampzTableHead } from "./ChampzTableHead";
import { ChampzTableRow } from "./ChampzTableRow";
import { TableContainer, TablePagination, TableRow } from "@mui/material";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import { ChampzTableFooter } from "./ChampzTableFooter";
import { useGameData } from "@/hooks/useGameData";
import { ChampzLoading } from "../ChampzLoading";

export function PaginationTable<T extends { id: number; wallet?: string }>(
  props: PaginationTableProps<T>,
) {
  const [page, setPage] = useState(props.page ?? 0);
  const [rowsPerPage, setRowsPerPage] = useState(props.rowsPerPage ?? 5);
  const { gameData } = useGameData();

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - props.rows.length) : 0;

  const handleChangePage = (
    _: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (props.isLoading) {
    return <ChampzLoading />;
  }

  return (
    <TableContainer>
      <ChampzTable className="small">
        <ChampzTableHead>
          <ChampzTableRow>
            {props.columns.map((column) => (
              <ChampzTableCell>{column.headerName}</ChampzTableCell>
            ))}
          </ChampzTableRow>
        </ChampzTableHead>
        <ChampzTableBody>
          {(rowsPerPage > 0
            ? props.rows.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
              )
            : props.rows
          ).map((row) => (
            <ChampzTableRow
              key={row.id}
              className={
                props.highlightPlayer &&
                row.wallet?.toUpperCase() ===
                  gameData?.player.wallet?.toUpperCase()
                  ? "highlight"
                  : ""
              }
            >
              {props.columns.map((column) => (
                <ChampzTableCell scope="row">
                  {column.render(row)}
                </ChampzTableCell>
              ))}
            </ChampzTableRow>
          ))}
          {emptyRows > 0 && (
            <ChampzTableRow>
              <ChampzTableCell />
            </ChampzTableRow>
          )}
        </ChampzTableBody>
        <ChampzTableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              rowsPerPage={rowsPerPage}
              colSpan={3}
              count={props.rows.length}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </ChampzTableFooter>
      </ChampzTable>
    </TableContainer>
  );
}

export interface PaginationTableColumns<T> {
  headerName: string;
  render: (row: T) => React.ReactNode;
}

export interface PaginationTableProps<T> {
  rowsPerPage?: number;
  page?: number;
  isLoading?: Boolean;
  highlightPlayer?: boolean;
  columns: PaginationTableColumns<T>[];
  rows: T[];
}
