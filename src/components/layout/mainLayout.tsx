import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../header/header";

const MainLayout = () => {
  return (
    <Box margin="auto" p={2} maxWidth="1000px">
      <Header />
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
