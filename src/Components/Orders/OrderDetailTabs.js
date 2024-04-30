import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Summary from "./SummaryDetails";
import "./styles.css";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className="custom-tab-panel"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function tabProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const CustomTabPanels = () => {
  const data = [
    { name: "Date Authorized", details: "12 Jul 2019" },
    { name: "Authorized By", details: "Jim Darren" },
    { name: "Invoice Chased Date", details: "-" },
    { name: "PO Chased Date", details: "-" },
    { name: "PO Confirmed Date", details: "-" },
    { name: "PO Ref No.", details: "-" },
  ];
  const [value, setValue] = React.useState(0);
  const TabText = [
    "Summary",
    "Order Lines",
    "Suppliers",
    "Analysis",
    "Freight Details",
    "Delivery",
    "Invoice",
    "Memos",
    "Notes & Attachments",
    "Budgets",
  ];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="tabs-container">
      <Box className="tabs-header">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            className: "tab-indicator",
          }}
        >
          {TabText.map((label, i) => (
            <Tab
              key={i}
              label={label}
              {...tabProps(i)}
              className="tab-label"
              classes={{
                selected: "tab-selected",
              }}
            />
          ))}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Summary data={data} />
      </CustomTabPanel>
      {TabText.slice(1).map((label, i) => (
        <CustomTabPanel key={i + 1} value={value} index={i + 1}>
          Text Content {label}
        </CustomTabPanel>
      ))}
    </Box>
  );
};

export default CustomTabPanels;
