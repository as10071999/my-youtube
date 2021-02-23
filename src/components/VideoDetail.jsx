import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div>
        <CircularProgress color="secondary" />
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="iframe" src={videoSrc} height="480" />
      </CardActionArea>
      <CardContent>
        <Typography variant="button">{video.snippet.title}</Typography>
        <Typography variant="body2">{video.snippet.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default VideoDetail;
