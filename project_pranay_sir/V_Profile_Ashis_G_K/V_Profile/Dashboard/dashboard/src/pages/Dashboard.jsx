import React, { useContext } from "react";
import SideBar from "../components/SideBar";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Grow,
  CardActionArea,
  Checkbox,
  FormControlLabel,
  Avatar, // Import Avatar from Material-UI
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { myContext } from "../context/Appcontext";
import Home from "../gourav/Home";
import Login_First from "../components/Login_First";

const Dashboard = () => {
  const themecontext = useContext(myContext);
  const { vcardtheme, setvcardtheme ,token } = themecontext;

  const themes = [
    { id: 1, name: "Theme1", creator: "Gaurav", image: "/gourav.png" },
    { id: 2, name: "Theme2", creator: "Ashish", image: "/ashish.png" },
    { id: 3, name: "Theme3", creator: "Anirudh", image: "/path/to/theme3-image.png" },
  ];

  const handleThemeClick = (theme) => {
    setvcardtheme(theme);
  };

  return (
    <>
      
            {token ?(<><Box
        sx={{
          display: "flex",
          backgroundColor: "rgb(238,238,238)",
          // height: "100vh",
        }}
      >
        <SideBar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            marginTop: "3rem",
          }}
        >
          <Grid container spacing={3}>
            {themes.map((theme) => (
              <Grid item xs={12} sm={6} md={4} key={theme.id}>
                <Grow in={true}>
                  <Card
                    style={{
                      cursor: "pointer",
                      position: "relative",
                    }}
                  >
                    <CardActionArea onClick={() => handleThemeClick(theme.id)}>
                      <CardContent>
                        {/* Image Section */}
                        <Avatar
                          variant="square"
                          src={theme.image}
                          sx={{
                            width: "100%",
                            height: 160, // Adjust height as needed
                            marginBottom: 1, // Optional margin
                          }}
                        />
                        <Typography variant="h5" component="h2">
                          {theme.name}
                        </Typography>
                        <Typography color="textSecondary">
                          Created by {theme.creator}
                        </Typography>
                      </CardContent>
                      {vcardtheme === theme.id && (
                        <Box
                          style={{
                            position: "absolute",
                            top: "50%",
                            right: "8px",
                            transform: "translateY(-50%)",
                          }}
                        >
                          <FormControlLabel
                            control={<Checkbox checked color="primary" sx={{marginTop:"150px"}} />}
                            label=""
                            labelPlacement="end"
                          />
                        </Box>
                      )}
                    </CardActionArea>
                  </Card>
                </Grow>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box></>):(<><Login_First/></>)}
      

      {/* <Home/> */}
    </>
  );
};

export default Dashboard;
