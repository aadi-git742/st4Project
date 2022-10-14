import React from "react";
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="content">
      <h1 className="text-center"><u> Home </u></h1>
      <div className="home-content">
        <div className="home-image">
          <img src="admin.jpeg" alt="admin" />
        </div>
        <div>
          <Typography variant="h3" className="lead">
            Welcome Admin!!!
          </Typography>
          <br></br>
          <br></br>
          <Button variant="contained" color="info" onClick={() => navigate("/dashboard")}>
            Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
