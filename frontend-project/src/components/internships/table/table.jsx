import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
// import DeleteIcon from '@mui/icons-material/Delete';
// import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from "@mui/utils";

function createData(
  internship_title,
  description,
  completion_period,
  total_enrolled,
  qualified_candidates,
  action
) {
  return {
    internship_title,
    description,
    completion_period,
    total_enrolled,
    qualified_candidates,
    action,
  };
}

const rows = [
  createData(
    "Product Design GVI",
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    120,
    20000,
    67,
    4.3
  ),
  createData(
    "Product Design GVI",
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    120,
    20000,
    67,
    4.3
  ),
  createData(
    "Product Design GVI",
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    120,
    20000,
    67,
    4.3
  ),
  createData(
    "Product Design GVI",
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    120,
    20000,
    67,
    4.3
  ),
  createData(
    "Product Design GVI",
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    120,
    20000,
    67,
    4.3
  ),
  createData(
    "Product Design GVI",
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    120,
    20000,
    67,
    4.3
  ),
  createData(
    "Product Design GVI",
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    120,
    20000,
    67,
    4.3
  ),
  createData(
    "Product Design GVI",
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    120,
    20000,
    67,
    4.3
  ),
  createData(
    "Product Design GVI",
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    120,
    20000,
    67,
    4.3
  ),
  createData(
    "Product Design GVI",
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    120,
    20000,
    67,
    4.3
  ),
  createData(
    "Product Design GVI",
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    120,
    20000,
    67,
    4.3
  ),
  createData(
    "Product Design GVI",
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    120,
    20000,
    67,
    4.3
  ),
  createData(
    "Product Design GVI",
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    120,
    20000,
    67,
    4.3
  ),
  createData(
    "Product Design GVI",
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    120,
    20000,
    67,
    4.3
  ),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "internship_title",
    numeric: false,
    disablePadding: true,
    label: "Internship Title",
  },
  {
    id: "completion_period",
    numeric: true,
    disablePadding: false,
    label: "Completion Period",
  },
  {
    id: "total_enrolled",
    numeric: true,
    disablePadding: false,
    label: "Total Enrolled",
  },
  {
    id: "qualified_candidates",
    numeric: true,
    disablePadding: false,
    label: "Qualified Candidates",
  },
  {
    id: "action",
    numeric: true,
    disablePadding: false,
    label: ">",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all internships",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      className="bg-light"
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Internships
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>{/* <DeleteIcon /> */}</IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>{/* <FilterListIcon /> */}</IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("total_enrolled");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.sort(getComparator(order, orderBy)).slice() */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        <p className="fw-bold py-1">
                          {row.internship_title} <br />
                          <span className="text-muted fw-light">
                            {row.description}
                          </span>
                        </p>
                      </TableCell>
                      <TableCell align="right" className="fw-bold fs-4">
                        {row.completion_period}
                      </TableCell>
                      <TableCell align="right">
                        <span className="my-2 fw-bold fs-4 py-1 px-3 text-purple bg-light">
                          {row.total_enrolled}
                        </span>
                      </TableCell>
                      <TableCell align="right">
                        {/* {row.qualified_candidates} */}
                        <svg
                          width="200"
                          height="90"
                          viewBox="0 0 250 90"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="250" height="90" fill="white" />
                          <rect
                            x="105"
                            y="18"
                            width="40"
                            height="24"
                            rx="4"
                            fill="#793EF5"
                          />
                          <path
                            d="M117.977 34V26.608H117.773L116.513 29.356H115.037L116.825 25.6H119.369V34H117.977ZM120.753 34V33.028C120.753 32.436 120.849 31.952 121.041 31.576C121.241 31.192 121.525 30.88 121.893 30.64C122.261 30.392 122.709 30.188 123.237 30.028L124.005 29.788C124.317 29.684 124.581 29.56 124.797 29.416C125.013 29.272 125.181 29.096 125.301 28.888C125.421 28.672 125.481 28.42 125.481 28.132V28.084C125.481 27.652 125.333 27.312 125.037 27.064C124.741 26.808 124.345 26.68 123.849 26.68C123.353 26.68 122.949 26.816 122.637 27.088C122.325 27.352 122.169 27.744 122.169 28.264V28.468H120.777V28.288C120.777 27.68 120.913 27.164 121.185 26.74C121.457 26.316 121.825 25.992 122.289 25.768C122.753 25.544 123.273 25.432 123.849 25.432C124.425 25.432 124.941 25.544 125.397 25.768C125.861 25.984 126.221 26.288 126.477 26.68C126.741 27.072 126.873 27.532 126.873 28.06V28.18C126.873 28.716 126.765 29.168 126.549 29.536C126.333 29.904 126.033 30.208 125.649 30.448C125.273 30.68 124.845 30.872 124.365 31.024L123.621 31.252C123.261 31.364 122.973 31.484 122.757 31.612C122.549 31.74 122.401 31.888 122.313 32.056C122.225 32.216 122.181 32.42 122.181 32.668V32.752H126.801V34H120.753ZM131.237 34.168C130.253 34.168 129.465 33.892 128.873 33.34C128.281 32.788 127.985 31.956 127.985 30.844V28.756C127.985 27.668 128.281 26.844 128.873 26.284C129.465 25.716 130.253 25.432 131.237 25.432C132.229 25.432 133.017 25.716 133.601 26.284C134.193 26.844 134.489 27.668 134.489 28.756V30.844C134.489 31.956 134.193 32.788 133.601 33.34C133.017 33.892 132.229 34.168 131.237 34.168ZM131.237 32.92C131.869 32.92 132.333 32.744 132.629 32.392C132.933 32.04 133.085 31.54 133.085 30.892V28.696C133.085 28.04 132.921 27.54 132.593 27.196C132.265 26.852 131.813 26.68 131.237 26.68C130.645 26.68 130.189 26.856 129.869 27.208C129.549 27.56 129.389 28.056 129.389 28.696V30.892C129.389 31.556 129.541 32.06 129.845 32.404C130.157 32.748 130.621 32.92 131.237 32.92Z"
                            fill="white"
                          />
                          <path
                            d="M30 67C30 65.3431 31.3431 64 33 64C34.6569 64 36 65.3431 36 67V78H30V67Z"
                            fill="#C4C4C4"
                          />
                          <path
                            d="M39.6842 63.3999C39.6842 61.743 41.0273 60.3999 42.6842 60.3999C44.3411 60.3999 45.6842 61.743 45.6842 63.3999V77.9999H39.6842V63.3999Z"
                            fill="#C4C4C4"
                          />
                          <path
                            d="M49.3684 61C49.3684 59.3431 50.7116 58 52.3684 58C54.0253 58 55.3684 59.3431 55.3684 61V78H49.3684V61Z"
                            fill="#C4C4C4"
                          />
                          <path
                            d="M59.0526 63.3999C59.0526 61.743 60.3958 60.3999 62.0526 60.3999C63.7095 60.3999 65.0526 61.743 65.0526 63.3999V77.9999H59.0526V63.3999Z"
                            fill="#C4C4C4"
                          />
                          <path
                            d="M68.7368 63.3999C68.7368 61.743 70.08 60.3999 71.7368 60.3999C73.3937 60.3999 74.7368 61.743 74.7368 63.3999V77.9999H68.7368V63.3999Z"
                            fill="#C4C4C4"
                          />
                          <path
                            d="M78.421 67C78.421 65.3431 79.7642 64 81.421 64C83.0779 64 84.421 65.3431 84.421 67V78H78.421V67Z"
                            fill="#C4C4C4"
                          />
                          <path
                            d="M88.1052 62.2002C88.1052 60.5433 89.4484 59.2002 91.1052 59.2002C92.7621 59.2002 94.1052 60.5433 94.1052 62.2002V78.0002H88.1052V62.2002Z"
                            fill="#C4C4C4"
                          />
                          <path
                            d="M97.7894 58.6001C97.7894 56.9432 99.1326 55.6001 100.789 55.6001C102.446 55.6001 103.789 56.9432 103.789 58.6001V78.0001H97.7894V58.6001Z"
                            fill="#C4C4C4"
                          />
                          <path
                            d="M107.474 57C107.474 55.3431 108.817 54 110.474 54C112.13 54 113.474 55.3431 113.474 57V78H107.474V57Z"
                            fill="#C4C4C4"
                          />
                          <path
                            d="M117.158 53.3999C117.158 51.743 118.501 50.3999 120.158 50.3999C121.815 50.3999 123.158 51.743 123.158 53.3999V77.9999H117.158V53.3999Z"
                            fill="#793EF5"
                          />
                          <path
                            d="M126.842 57C126.842 55.3431 128.185 54 129.842 54C131.499 54 132.842 55.3431 132.842 57V78H126.842V57Z"
                            fill="#C4C4C4"
                          />
                          <path
                            d="M136.526 58.6001C136.526 56.9432 137.87 55.6001 139.526 55.6001C141.183 55.6001 142.526 56.9432 142.526 58.6001V78.0001H136.526V58.6001Z"
                            fill="#C4C4C4"
                          />
                          <path
                            d="M146.211 49C146.211 47.3431 147.554 46 149.211 46C150.867 46 152.211 47.3431 152.211 49V78H146.211V49Z"
                            fill="#C4C4C4"
                          />
                          <path
                            d="M155.895 53.3999C155.895 51.743 157.238 50.3999 158.895 50.3999C160.552 50.3999 161.895 51.743 161.895 53.3999V77.9999H155.895V53.3999Z"
                            fill="#C4C4C4"
                          />
                          <path
                            d="M165.579 58.6001C165.579 56.9432 166.922 55.6001 168.579 55.6001C170.236 55.6001 171.579 56.9432 171.579 58.6001V78.0001H165.579V58.6001Z"
                            fill="#C4C4C4"
                          />
                          <path
                            d="M175.263 63.3999C175.263 61.743 176.606 60.3999 178.263 60.3999C179.92 60.3999 181.263 61.743 181.263 63.3999V77.9999H175.263V63.3999Z"
                            fill="#C4C4C4"
                          />
                          <path
                            d="M184.947 61C184.947 59.3431 186.291 58 187.947 58C189.604 58 190.947 59.3431 190.947 61V78H184.947V61Z"
                            fill="#C4C4C4"
                          />
                          <path
                            d="M194.632 67C194.632 65.3431 195.975 64 197.632 64C199.288 64 200.632 65.3431 200.632 67V78H194.632V67Z"
                            fill="#C4C4C4"
                          />
                          <path
                            d="M204.316 70.2002C204.316 68.5433 205.659 67.2002 207.316 67.2002C208.973 67.2002 210.316 68.5433 210.316 70.2002V78.0002H204.316V70.2002Z"
                            fill="#C4C4C4"
                          />
                          <path
                            d="M214 74.2002C214 72.5433 215.343 71.2002 217 71.2002C218.657 71.2002 220 72.5433 220 74.2002V78.0002H214V74.2002Z"
                            fill="#C4C4C4"
                          />
                        </svg>
                      </TableCell>
                      <TableCell align="right">
                        {/* {row.action} */}
                        <span>
                          <svg
                            width="28"
                            height="28"
                            viewBox="0 0 28 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.33337 25.6665H25.6667"
                              stroke="#793EF5"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M11.375 4.66683V25.6668H16.625V4.66683C16.625 3.3835 16.1 2.3335 14.525 2.3335H13.475C11.9 2.3335 11.375 3.3835 11.375 4.66683Z"
                              stroke="#793EF5"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M8.16667 11.6668C8.16667 10.3835 7.7 9.3335 6.3 9.3335H5.36667C3.96667 9.3335 3.5 10.3835 3.5 11.6668V25.6668H8.16667V16.3218"
                              stroke="#793EF5"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M19.8334 17.4998V25.6665H24.5V17.4998C24.5 16.2165 24.0334 15.1665 22.6334 15.1665H21.7C20.3 15.1665 19.8334 16.2165 19.8334 17.4998Z"
                              stroke="#793EF5"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                        <span>
                          <svg
                            width="28"
                            height="28"
                            viewBox="0 0 28 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.7933 4.62016C15.3533 5.4485 15.6799 6.44016 15.6799 7.5135C15.6683 10.3135 13.4633 12.5885 10.6866 12.6818C10.5699 12.6702 10.4299 12.6702 10.3016 12.6818C7.52495 12.5885 5.31995 10.3135 5.31995 7.5135C5.31995 4.65516 7.62995 2.3335 10.4999 2.3335"
                              stroke="#793EF5"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M19.145 4.6665C21.4083 4.6665 23.2283 6.49817 23.2283 8.74984C23.2283 10.9548 21.4783 12.7515 19.2966 12.8332C19.2033 12.8215 19.0983 12.8215 18.9933 12.8332"
                              stroke="#793EF5"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M4.85334 16.9865C2.03001 18.8765 2.03001 21.9565 4.85334 23.8348C8.06167 25.9815 13.3233 25.9815 16.5317 23.8348C19.355 21.9448 19.355 18.8648 16.5317 16.9865C13.335 14.8515 8.07334 14.8515 4.85334 16.9865Z"
                              stroke="#793EF5"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M21.3967 23.3335C22.2367 23.1585 23.0301 22.8202 23.6834 22.3185C25.5034 20.9535 25.5034 18.7018 23.6834 17.3368C23.0417 16.8468 22.2601 16.5202 21.4317 16.3335"
                              stroke="#793EF5"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                        <span>
                          <svg
                            width="28"
                            height="28"
                            viewBox="0 0 28 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.48 8.3535C11.48 9.74183 12.6116 10.8735 14 10.8735C15.3883 10.8735 16.52 9.74183 16.52 8.3535C16.52 6.96516 15.3883 5.8335 14 5.8335"
                              stroke="#793EF5"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M7.92161 22.1665C9.30994 22.1665 10.4416 21.0348 10.4416 19.6465C10.4416 18.2581 9.30994 17.1265 7.92161 17.1265C6.53328 17.1265 5.40161 18.2581 5.40161 19.6465C5.40161 21.0348 6.52161 22.1665 7.92161 22.1665Z"
                              stroke="#793EF5"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M20.0783 22.1665C21.4667 22.1665 22.5984 21.0348 22.5984 19.6465C22.5984 18.2581 21.4667 17.1265 20.0783 17.1265C18.69 17.1265 17.5583 18.2581 17.5583 19.6465C17.5583 21.0348 18.69 22.1665 20.0783 22.1665Z"
                              stroke="#793EF5"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}
