import React from "react";
import Box from "@mui/material/Box";
import { Clean, LabelClean } from "../Common/ComponentStyles";
import LabelInput from "../Common/LabelInput";
import Avatar from "@mui/material/Avatar";
import { green } from "@mui/material/colors";
import Balcony from "@mui/icons-material/Balcony";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import PrintIcon from "@mui/icons-material/Print";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import OrderDetailTabs from "./OrderDetailTabs";
import "./styles.css";

const OrderDetails = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#F5F5F5",
          boxShadow: "0px 1px 8px 0px #0000001F",
          width: "100%",
          height: "100%",
          borderRadius: "16px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#E8ECED",
            width: "100%",
            height: "114px",
            padding: "24px 20px 24px 20px",
            borderBottom: "1px solid black",
          }}
        >
          <div>
            <LabelClean>
              <div className="displayflex">
                <Avatar
                  sx={{
                    bgcolor: green[500],
                    fontSize: "12px",
                    width: "22px",
                    height: "22px",
                  }}
                >
                  RT
                </Avatar>
                <LabelInput
                  padding={"3px 0px 0px 10px"}
                  text={"4907 - 00019"}
                  fontWeight={"600"}
                  fontSize={"14px"}
                  color={"#020A08"}
                />
                <LabelInput
                  padding={"3px 0px 0px 10px"}
                  text={"HOTEL/TECH WORK SQUAD GFR"}
                  fontWeight={"700"}
                  fontSize={"14px"}
                  color={"#020A08"}
                />
              </div>
              <div>
                <Box
                  sx={{
                    margin: "10px 0px 0px 0px",
                    borderRadius: "5px",
                    fontSize: "12px",
                    width: "114px",
                    height: "28px",
                    backgroundColor: "#80E7FF",
                    padding: "6px 12px 0px 8px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Balcony
                    sx={{ width: "11px", height: "12px", color: "#04487F" }}
                  />{" "}
                  <LabelInput
                    fontSize={"12px"}
                    text={"Lorem ipsum"}
                    padding={"0px 0px 0px 5px"}
                  />
                </Box>
              </div>
            </LabelClean>

            <LabelClean>
              <div className="dateLabel">
                <div>
                  <LabelInput
                    text={"Date Requested"}
                    fontWeight={"500"}
                    fontSize={"11px"}
                    color={"#697E85"}
                  />
                  <LabelInput
                    padding={"3px 0px 0px 0px"}
                    text={"12 Jul 2019"}
                    fontWeight={"500"}
                    fontSize={"12px"}
                    color={"#020A08"}
                  />
                </div>

                <div>
                  <LabelInput
                    text={"Type"}
                    fontWeight={"500"}
                    fontSize={"11px"}
                    color={"#697E85"}
                    margin={"0px 0px 0px 20px"}
                  />
                  <LabelInput
                    padding={"3px 0px 0px 20px"}
                    text={"Services"}
                    fontWeight={"500"}
                    fontSize={"12px"}
                    color={"#020A08"}
                  />
                </div>
                <div>
                  <LabelInput
                    text={"Account code"}
                    fontWeight={"500"}
                    fontSize={"11px"}
                    color={"#697E85"}
                    margin={"0px 0px 0px 20px"}
                  />
                  <LabelInput
                    padding={"3px 0px 0px 20px"}
                    text={"5830042 - HM PAX ACCOMODATION (LABOUR)"}
                    fontWeight={"500"}
                    fontSize={"12px"}
                    color={"#020A08"}
                  />
                </div>
              </div>
              <div>
                <Clean>
                  <LabelInput
                    text={"Order summary"}
                    color={"#00704B"}
                    fontSize={"12px"}
                    textDecoration={"underline"}
                    margin={"0px 16px 0px 0px"}
                  />
                  <LabelInput
                    text={"Order Progress"}
                    color={"#00704B"}
                    fontSize={"12px"}
                    textDecoration={"underline"}
                  />
                </Clean>
              </div>
            </LabelClean>

            <LabelClean>
              <div></div>
            </LabelClean>
          </div>
        </Box>

        <Box
          sx={{
            backgroundColor: "#F5F5F5",
            display: "flex",
            borderStyle: "solid",
            borderRadius: "0px",
            height: "40px",
            width: "100%",
            borderColor: "#CDD6DB",
            padding: "8px 20px 8px 20px",
            borderTop: "1px solid #CDD6DB",
            borderBottom: "1px solid #CDD6DB",
          }}
        >
          <div className="displayflex">
            <SaveAsIcon sx={{ width: "22px", height: "22px", color: "#00704B" }} />
            <LabelInput
              text={"Edit Order Details"}
              color={"#00704B"}
              fontSize={"12px"}
              textDecoration={"underline"}
              padding={"2px 0px 0px 10px"}
            />
          </div>
          <div className="orderDetails">
            <PrintIcon sx={{ width: "22px", height: "22px", color: "#00704B" }} />
            <LabelInput
              text={"Print Order Details"}
              color={"#00704B"}
              fontSize={"12px"}
              textDecoration={"underline"}
              padding={"2px 0px 0px 10px"}
            />
          </div>
          <div className="orderDetails">
            <FileOpenIcon sx={{ width: "22px", height: "22px", color: "#00704B" }} />
            <LabelInput
              text={"Change Delivery Status"}
              color={"#00704B"}
              fontSize={"12px"}
              textDecoration={"underline"}
              padding={"2px 0px 0px 10px"}
            />
          </div>
          <div className="orderDetails">
            <FindInPageIcon sx={{ width: "22px", height: "22px", color: "#00704B" }} />
            <LabelInput
              text={"Reports"}
              color={"#00704B"}
              fontSize={"12px"}
              textDecoration={"underline"}
              padding={"2px 0px 0px 10px"}
            />
          </div>
          <div className="orderDetails">
            <TouchAppIcon sx={{ width: "22px", height: "22px", color: "#00704B" }} />
            <LabelInput
              text={"Actions"}
              color={"#00704B"}
              fontSize={"12px"}
              textDecoration={"underline"}
              padding={"2px 0px 0px 10px"}
            />
          </div>
        </Box>

        <OrderDetailTabs />
      </Box>
    </div>
  );
};

export default OrderDetails;
