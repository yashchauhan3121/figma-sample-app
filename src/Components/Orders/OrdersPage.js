import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Company, Order } from "../Common/ComponentStyles";
import IconButton from "@mui/material/IconButton";
import LabelInput from "../Common/LabelInput";
import OrdersCard from "./OrdersCard";
import OrderDetails from "./OrderDetails";
import FiltersCard from "./FiltersCard";

export default function BasicGrid() {
  return (
    <Box sx={{ maxWidth: "100%", overflowX: "auto" }}>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 2 }} spacing={2} sx={{ maxWidth: "100%" }}>
        <Grid item xs={12} sm={4}>
          <FiltersCard />
          <Order>
            <LabelInput
              text={"Order"}
              fontWeight={"500"}
              padding={"0px 10px 0px 0px"}
            />
            <IconButton
              sx={{
                backgroundColor: "#D9D1C6",
                width: "24px",
                height: "18px",
                fontSize: "11px",
                fontWeight: "600",
                padding: "5px 8px 5px 8px",
              }}
            >
              8
            </IconButton>
          </Order>
          {Array.from({ length: 6 }, (_, index) => (
            <OrdersCard key={index} />
          ))}
        </Grid>
        <Grid item xs={12} sm={8} sx={{ maxWidth: "100%" }}>
          <Company>
            <OrderDetails />
          </Company>
        </Grid>
      </Grid>
    </Box>
  );
}
