/* eslint-disable react/prop-types */
import Box from "components/Box";
import Typography from "components/Typography";
import Table from "examples/Tables/Table";
import { useGetBlogs, useUpdateBlogBanner } from "queries/StoreQuery";
import { Avatar, Icon, Switch } from "@mui/material";
import Badge from "components/Badge";
import { Link } from "react-router-dom";

function Blogs({ image, name, desc }) {
  return (
    <Box display="flex" alignItems="center" px={1} py={0.5} style={{ textTransform: "capitalize" }}>
      <Box mr={2}>
        <Avatar src={image} alt={name} size="sm" variant="rounded" />
      </Box>
      <Box display="flex" flexDirection="column">
        <Typography
          variant=""
          fontWeight="medium"
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "300px",
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="caption"
          color="secondary"
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "300px",
          }}
        >
          {desc}
        </Typography>
      </Box>
    </Box>
  );
}

const TableData = () => {
  const { data, isLoading } = useGetBlogs({ pageNo: 1, pageCount: 100 });
  const { mutate: updateBanner } = useUpdateBlogBanner();
  const columns = [
    { name: "Blogs", align: "left" },
    { name: "url", align: "center" },
    { name: "status", align: "center" },
    { name: "banner", align: "center" },
    { name: "createdOn", align: "center" },
    { name: "Important", align: "center" },
    { name: "action", align: "center" },
  ];
  const handleBannerChange = (blogId, isBanner) => {
    isBanner && updateBanner({ blogId, banner: isBanner });
  };
  const rows = data?.data?.map((item) => ({
    Blogs: (
      <Blogs
        image={`${process.env.REACT_APP_API_URL}/uploads/${item?.image}`}
        name={item?.title}
        desc={item?.subtitle}
      />
    ),
    url: (
      <Typography
        variant="caption"
        color="secondary"
        fontWeight="medium"
        style={{ textTransform: "lowercase" }}
      >
        <a href={`https://www.mapmyproperty.in/blogs/${item?.url}`}>
          /{item?.url.substring(0, 40)}
        </a>
      </Typography>
    ),
    status: (
      <Badge
        variant="gradient"
        badgeContent={item?.status ? "Available" : "Unavailable"}
        color={item?.status ? "success" : "secondary"}
        size="xs"
        container
      />
    ),
    banner: (
      <Switch
        checked={item?.banner}
        onChange={() => handleBannerChange(item?._id, !item?.banner)}
        color="primary"
      />
    ),
    createdOn: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        {new Date(item?.createdAt).toDateString()}
      </Typography>
    ),
    Important: (
      <Badge
        variant="gradient"
        badgeContent={item?.isImportant ? "Important" : "Not-Important"}
        color={item?.isImportant ? "success" : "secondary"}
        size="xs"
        container
      />
    ),
    action: (
      <Link to={`/blogs/editBlog/${item?._id}`}>
        <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
          more_vert
        </Icon>
      </Link>
    ),
  }));
  return isLoading ? (
    <Typography fontSize={14} sx={{ paddingX: 5 }}>
      loading...
    </Typography>
  ) : (
    <Table columns={columns} rows={rows} />
  );
};

export default TableData;
