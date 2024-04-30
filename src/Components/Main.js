import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { DrawerHeader } from "./Common/ComponentStyles";
import OrdersPage from "./Orders/OrdersPage";
import TopBar from "./Common/AppBar";

const Main = () => {

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TopBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: "#F5F5F5" }}>
        <DrawerHeader />
        <OrdersPage />
      </Box>
    </Box>
  );
};

export default Main;
