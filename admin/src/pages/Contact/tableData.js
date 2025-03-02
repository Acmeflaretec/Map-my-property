import { useState } from "react";
import Box from "components/Box";
import Typography from "components/Typography";
import Table from "examples/Tables/Table";
import { Select, MenuItem, TextField, Button, Pagination } from "@mui/material";
import { useGetContact, useUpdateContactStatus } from "queries/StoreQuery";
import whatsapp from "assets/images/whatsapp.svg";
import { Link } from "react-router-dom";

const TableData = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [sortBy, setSortBy] = useState("createdAt");
  const [order, setOrder] = useState("desc");
  const [search, setSearch] = useState("");

  const { data, isLoading } = useGetContact({ page, perPage, sortBy, order, search });
  const { mutate: updateUserStatus, isLoading: deleting } = useUpdateContactStatus();

  const handleStatusChange = (userId, newStatus) => {
    updateUserStatus({ userId, newStatus });
  };
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const columns = [
    { name: "User", align: "left" },
    { name: "Phone", align: "center" },
    { name: "Path", align: "center" },
    { name: "Date", align: "center" },
    { name: "Time", align: "center" },
    { name: "Status", align: "center" },
  ];

  const rows = data?.docs?.map((item) => ({
    User: (
      <>
        <Box key={item?._id} display="flex" alignItems="center" px={1} py={0.5}>
          <Box display="flex" flexDirection="column">
            <Typography
              variant="caption"
              color="secondary"
              fontWeight="medium"
              sx={{ textTransform: "lowercase" }}
            >
              <span style={{ textTransform: "capitalize" }}> {item?.name && item?.name} </span>{" "}
              <br />
              <a
                target="_blank"
                href={item?.email ? `mailto:${item?.email}` : "#"}
                rel="noreferrer"
              >
                {item?.email && item?.email}
                <br />
              </a>
            </Typography>
          </Box>
        </Box>
      </>
    ),
    Phone: (
      <Typography
        variant="caption"
        color="secondary"
        fontWeight="medium"
        sx={{ display: "flex", alignItems: "center" }}
      >
        {item?.phoneNumber && (
          <>
            <a target="_blank" rel="noreferrer" href={`tel:+91${item?.phoneNumber}`}>
              {item?.phoneNumber}
            </a>
            &nbsp;&nbsp;
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://api.whatsapp.com/send?phone=91${item?.phoneNumber}&text=Hi%C2%A0there,%C2%A0Let%27s%C2%A0have%C2%A0a%C2%A0talk`}
            >
              <img src={whatsapp} height={20} width={20} />
            </a>
          </>
        )}
      </Typography>
    ),
    Path: (
      <Box display="flex" flexDirection="column">
        <Typography variant="caption" color="secondary" fontWeight="medium">
          {item?.pathname === "/" ? "home" : item?.pathname?.split("/")[1]}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "200px",
            textTransform: "capitalize",
          }}
          color="secondary"
          fontWeight="medium"
        >
          <Link
            to={`https://www.mapmyproperty.in${item?.pathname}`}
            target="_blank"
            rel="noreferrer"
          >
            {item?.pathname?.split("/")[2]}
          </Link>
        </Typography>
      </Box>
    ),
    Date: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        {new Date(item?.createdAt).toDateString()}
      </Typography>
    ),
    Time: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        {new Date(item?.createdAt).toLocaleTimeString()}
      </Typography>
    ),
    Status: (
      <Select
        value={item?.is_verified ? "Not-Viewed" : "Viewed"}
        onChange={(e) => handleStatusChange(item._id, e.target.value)}
      >
        {["Viewed", "Not-Viewed"].map((status) => (
          <MenuItem key={status} value={status}>
            {status}
          </MenuItem>
        ))}
      </Select>
    ),
    // Action: (
    //   <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
    //     more_vert
    //   </Icon>
    // ),
  }));
  // console.log('datauser', data);

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="space-between" py={2} px={2}>
        <TextField
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          variant="outlined"
          size="small"
          style={{ marginLeft: "5px" }}
        />
        <Box>
          <Button onClick={() => setOrder(order === "asc" ? "desc" : "asc")}>
            Sort by {sortBy} ({order})
          </Button>
        </Box>
      </Box>
      {isLoading ? (
        <Typography fontSize={14} sx={{ paddingX: 5 }}>
          loading...
        </Typography>
      ) : (
        <Table columns={columns} rows={rows} />
      )}
      <Box style={{ display: "flex", justifyContent: "center", Margin: "10px" }}>
        <Pagination
          count={Math.ceil((data?.totalDocs || 0) / perPage)}
          page={page}
          onChange={handlePageChange}
        />
      </Box>
    </>
  );
};

export default TableData;
