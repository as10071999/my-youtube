import React, { useEffect, useRef, useState } from "react";
import VideoDetail from "./components/VideoDetail";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  fade,
  makeStyles,
  Grid,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import YouTubeIcon from "@material-ui/icons/YouTube";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function App() {
  const classes = useStyles();
  const searchRef = useRef();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, setVideos] = useState([]);

  console.log("Videos", videos);
  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      console.log(searchRef.current.value);
      let query = searchRef.current.value;
      let url = "https://www.googleapis.com/youtube/v3/search";
      const KEY = "AIzaSyBLF-qplB3n6ZQSGvqCA9vA0c_2jJteG2g";
      const response = await axios.get(url, {
        params: {
          part: "snippet",
          maxResults: 5,
          safeSearch: "moderate",
          key: KEY,
          q: query,
        },
      });
      // console.log("Serach asked");
      // console.log("Data Fetched:", response.data);
      setVideos(response.data.items);
      setSelectedVideo(response.data.items[0]);
    }
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <YouTubeIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            My Youtube
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              inputRef={searchRef}
              onKeyUp={handleKeyPress}
            />
          </div>
        </Toolbar>
      </AppBar>
      <Grid
        style={{ backgroundColor: "red" }}
        container
        spacing={4}
        direction="row"
      >
        <Grid item style={{ backgroundColor: "pink" }} xs={12} sm={9}>
          <VideoDetail video={selectedVideo} />
        </Grid>
        <Grid item style={{ backgroundColor: "Yellow" }} xs={12} sm={3}>
          List
        </Grid>
      </Grid>
    </div>
  );
}
