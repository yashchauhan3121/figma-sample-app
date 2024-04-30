import React from 'react'
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import {
  AppBar,
  Procurement,
  TopIcons,
  MenuButton,
  MenuItem,
  Listbox,
  AddIconBox,
  Drawer
} from "../Common/ComponentStyles";
import { Menu } from "@mui/base/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationAddOutlinedIcon from "@mui/icons-material/NotificationAddOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { Dropdown } from "@mui/base/Dropdown";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItemButton from "@mui/material/ListItemButton";
import AddIcon from "@mui/icons-material/Add";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import EngineeringIcon from "@mui/icons-material/Engineering";
import ListItemIcon from "@mui/material/ListItemIcon";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import HandymanIcon from "@mui/icons-material/Handyman";
import "../Orders/styles.css";

const IconWrapper = styled(ListItemIcon)({
  width: "24px",
  height: "24px",
  minWidth: 0,
  justifyContent: "center",
  margin: "8px",
  color: "#68DA6A",
  paddingTop: "8px",
  paddingBottom: "8px",
  transition: "background-color 0.3s, border-radius 0.3s",
});

const TopBar = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  const createHandleMenuClick = (menuItem) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
    };
  };

  const DropMenu = styled(Dropdown)(() => ({
    backgroundColor: "white",
  }));

  return (
    <>
      <AppBar
        open={open}
        className='appbar'
      >
        <Toolbar className='toolbar'>
          <Procurement noWrap component="div">
            Procurement
          </Procurement>
          <TopIcons>
            <IconButton
              sx={{
                border: "1px solid black",
                height: "28px",
                marginRight: "10px",
                backgroundColor: "white",
              }}
            >
              <SearchIcon sx={{ width: "12px", height: "14px", color: "black" }} />
            </IconButton>
            <IconButton>
              <NotificationAddOutlinedIcon />
            </IconButton>
            <IconButton sx={{ marginRight: "24px" }}>
              <AppsOutlinedIcon />
            </IconButton>
            <DropMenu>
              <MenuButton>
                {" "}
                <Avatar
                  alt="Test"
                  src="https://www.shareicon.net/data/512x512/2016/09/15/829459_man_512x512.png"
                  sx={{
                    width: "25px",
                    height: "25px",
                    backgroundColor: "#CDD6DB",
                    color: "#CDD6DB",
                  }}
                />{" "}
                Daniel Rogers
                <ArrowDropDownIcon />
              </MenuButton>
              <Menu slots={{ listbox: Listbox }}>
                <MenuItem onClick={createHandleMenuClick("Profile")}>Profile</MenuItem>
                <MenuItem onClick={createHandleMenuClick("Log out")}>Log out</MenuItem>
              </Menu>
            </DropMenu>
          </TopIcons>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <IconButton color="white" aria-label="open drawer" onClick={handleDrawerOpen}>
          <MenuIcon sx={{ color: "white", width: "24px", height: "24px" }} />
        </IconButton>

        <IconButton>
          <AddIconBox>
            <AddIcon sx={{ width: "24px", height: "24px", color: "#68DA6A" }} />
          </AddIconBox>
        </IconButton>
        <List>
          {[ViewInArIcon, WarningAmberIcon, EngineeringIcon, WaterDropIcon, NewReleasesIcon, HandymanIcon].map((Icon, index) => (
            <ListItemButton key={index}>
              <IconWrapper>
                <Icon />
              </IconWrapper>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  )
}

export default TopBar