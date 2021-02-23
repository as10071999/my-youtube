import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading ...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    // <div>
    //   <div className="ui embed">
    //     <iframe src={videoSrc} allowFullScreen title="Video player" />
    //   </div>
    //   <div className="ui segment">
    //     <h4 className="ui header">{video.snippet.title}</h4>
    //     <p>{video.snippet.description}</p>
    //   </div>
    // </div>
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
