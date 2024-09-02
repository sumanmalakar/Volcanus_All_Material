import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, useNavigate } from "react-router-dom";
import {
  AppBar,
  Menu,
  Toolbar,
  Typography,
  Button,
  Avatar,
} from "@mui/material";

import {
  AccountBalance,
  AccountBox,
  AccountCircle,
  Apartment,
  Dashboard,
  DesignServices,
  MeetingRoom,
  PermMedia,
} from "@mui/icons-material";
import { myContext } from "../context/Appcontext";
import { useContext } from "react";

const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});
const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const SideBar = () => {
  const navigate = useNavigate();
  const navcontext = useContext(myContext);
  const { logout, setToken, reload, setreload, user } = navcontext;
  const logouthandle = () => {
    logout();
    navigate("/login");
    setToken("");
    setreload(!reload);
  };

  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  return (
    <>
      <Box
        sx={{
          display: "flex",
        }}
      >
        {open && (
          <>
            <AppBar color="" sx={{ width: "100%" }}>
              <Toolbar className="d-flex justify-content-between ">
                <Box sx={{ marginLeft: "15rem" }}>
                  <Typography variant="h5" fontWeight={"bold"}>
                    {user != undefined ? (
                      <>
                        <div>Welcome Back!. {user.name || "admin"}</div>
                      </>
                    ) : (
                      <>Welcome Back!. Admin</>
                    )}
                  </Typography>
                </Box>
                <Box className=" d-flex gap-3  justify-content-cente align-items-center ">
                 {user && <Avatar
                    onClick={() => navigate("/home")}
                    alt={user.name || "Na"}
                    src={user.imgurl || ""}
                    sx={{
                      width: 50,
                      height: 50,
                      cursor: "pointer",
                    }}
                  />} 
                  <Button
                    sx={{ textDecoration: "none", fontWeight: "bold" }}
                    onClick={logouthandle}
                  >
                    Logout
                  </Button>
                </Box>
              </Toolbar>
            </AppBar>
          </>
        )}
        {!open && (
          <AppBar color="" sx={{ width: "100%" }}>
            <Toolbar className="d-flex justify-content-between ">
              <Box
                className="d-flex align-items-center gap-2 "
                sx={{ marginLeft: "5rem" }}
              >
                <div className="mx-3" style={{ width: "50px" }}>
                  <img
                    style={{ width: "60px", borderRadius: "50%" }}
                    src="https://isoftzone.com/assets/img/logo4.png"
                    alt=""
                  />
                </div>
                <Typography variant="h5" fontWeight={"bold"}>
                  {user != undefined ? (
                    <>
                      <div>Welcome Back!. {user.name || "admin"}</div>
                    </>
                  ) : (
                    <>Welcome Back!. Admin</>
                  )}
                </Typography>
              </Box>
              <Box className=" d-flex justify-content-cente align-items-center ">
              {user && <Avatar
                    onClick={() => navigate("/home")}
                    alt={user.name || "Na"}
                    src={user.imgurl || ""}
                    sx={{
                      width: 50,
                      height: 50,
                      cursor: "pointer",
                    }}
                  />} 
                <Button
                  sx={{ textDecoration: "none", fontWeight: "bold" }}
                  onClick={logouthandle}
                >
                  Logout
                </Button>
              </Box>
            </Toolbar>
          </AppBar>
        )}

        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <Box component="div"></Box>
            {!open && (
              <IconButton onClick={() => setOpen(!open)}>
                {theme.direction === "rtl" ? <MenuIcon /> : <MenuIcon />}
              </IconButton>
            )}
            {open && (
              <>
                <Box
                  component="div"
                  className="d-flex align-items-center  justify-content-center  "
                >
                  <div className="mx-3" style={{ width: "50px" }}>
                    <img
                      style={{ width: "60px", borderRadius: "50%" }}
                      src="https://isoftzone.com/assets/img/logo4.png"
                      alt=""
                    />
                  </div>
                  <Typography variant="h6" className="fw-bold ">
                    i-SOFT
                  </Typography>
                  <Typography
                    variant="h6"
                    color="secondary"
                    className="fw-bold "
                  >
                    ZONE
                  </Typography>
                </Box>
                <IconButton onClick={() => setOpen(false)}>
                  {theme.direction === "rtl" ? (
                    <ChevronRightIcon />
                  ) : (
                    <ChevronLeftIcon />
                  )}
                </IconButton>
              </>
            )}
          </DrawerHeader>
          <Divider />
          <List className="d-flex flex-column mt-2 gap-3  ">
            <NavLink to={"/theme"} style={{ textDecoration: "none" }}>
              <ListItem
                disablePadding
                sx={{ display: "block", fontWeight: "bold" }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <Dashboard color="secondary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Dashboard"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>

            <NavLink to={"/company"} style={{ textDecoration: "none" }}>
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <Apartment color="secondary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Company"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>

            <NavLink to={"/profile"} style={{ textDecoration: "none" }}>
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <AccountBox color="secondary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Profile"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>

            <NavLink to={"/payment"} style={{ textDecoration: "none" }}>
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <AccountBalance color="secondary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Payment"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>

            <NavLink to={"/service"} style={{ textDecoration: "none" }}>
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <DesignServices color="secondary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Services"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>

            <NavLink to={"/socialmedia"} style={{ textDecoration: "none" }}>
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <PermMedia color="secondary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Social Media"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>

            <NavLink to={"/appointment"} style={{ textDecoration: "none" }}>
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <MeetingRoom color="secondary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Appointment"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>
          </List>
        </Drawer>
      </Box>
    </>
  );
};
export default SideBar;
