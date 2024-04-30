import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const LabelInput = ({
  text,
  padding = 0,
  margin = 0,
  fontSize = "13px",
  color = "grey",
  textDecoration = "none",
  fontWeight = 600,
  icon,
  fontStyle = "",
}) => {
  const styles = {
    icon: {
      width: "14px",
      height: "14px",
      marginLeft: "10px",
    },
    label: {
      padding,
      margin,
      fontSize,
      color,
      textDecoration,
      fontFamily: "Inter, sans-serif",
      fontWeight,
      lineHeight: "16px",
      fontStyle,
    },
  };

  return (
    <div style={styles.label}>
      {text} {icon && <KeyboardArrowDownIcon sx={styles.icon} />}
    </div>
  );
};

export default LabelInput;
