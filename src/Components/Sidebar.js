import React from "react";
import { useNavigate } from "react-router-dom";
import { Drawer, Box, Typography, Avatar, Divider } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import AppsIcon from "@mui/icons-material/Apps";
import DashboardIcon from "@mui/icons-material/Dashboard";
import QueueIcon from "@mui/icons-material/Queue";
import HomeIcon from "@mui/icons-material/Home";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import "../Styles/sidebar.css";

export function Sidebar() {
  const navigate = useNavigate();
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <img src="mw.jpg" style={{height:90, width:90}}></img>
  <a class="navbar-brand" href="#">MyWorld </a>
  
  {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> */}
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a  onClick={() => navigate("/")} class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a onClick={() => navigate("/dashboard")} class="nav-link" href="#">Dashboard</a>
      </li>
      <li class="nav-item">
        <a onClick={() => navigate("/allstudent")} class="nav-link" href="#"> All Student</a>
      </li>
      <li class="nav-item">
        <a onClick={() => navigate("/addstudent")} class="nav-link" href="#"> Add Student</a>
      </li>
    </ul>
    {/* <span class="navbar-text">
      Navbar text with an inline element
    </span> */}
  </div>
</nav>
    // <div className="dashboard">
    //   <Drawer
    //     PaperProps={{
    //       sx: { width: "200px" },
    //     }}
    //     anchor="left"
    //     variant="permanent"
    //     className="sidebar">
    //     <Box p={2} role="presentation" className="side-head">
    //       <Avatar>
    //         <PersonIcon />
    //       </Avatar>
    //       <Typography variant="h6" component="div">
    //         Admin Dashboard
    //       </Typography>
    //     </Box>
    //     <Divider />
    //     <List>
    //       <ListItem disablePadding>
    //         <ListItemButton onClick={() => navigate("/")}>
    //           <ListItemIcon>
    //             <HomeIcon />
    //           </ListItemIcon>
    //           <ListItemText primary="Home" />
    //         </ListItemButton>
    //       </ListItem>
    //       <ListItemButton onClick={() => navigate("/dashboard")}>
    //         <ListItemIcon>
    //           <DashboardIcon />
    //         </ListItemIcon>
    //         <ListItemText primary="Dashboard" />
    //       </ListItemButton>

    //       <ListItemButton onClick={() => navigate("/allstudent")}>
    //         <ListItemIcon>
    //           <AppsIcon />
    //         </ListItemIcon>
    //         <ListItemText primary="All Student" />
    //       </ListItemButton>

    //       <ListItemButton onClick={() => navigate("/addstudent")}>
    //         <ListItemIcon>
    //           <QueueIcon />
    //         </ListItemIcon>
    //         <ListItemText primary="Add Student" />
    //       </ListItemButton>
    //     </List>
    //   </Drawer>
    // </div>
  );
}

export default Sidebar;
