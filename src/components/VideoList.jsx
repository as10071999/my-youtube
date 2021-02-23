import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";
import React from "react";

function VideoList({ videos, handleVideoSelect }) {
  return (
    <div>
      <GridList cellHeight={200} spacing={1}>
        {videos.map((video, i) => (
          <GridListTile
            key={i}
            cols={2}
            onClick={() => handleVideoSelect(video)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={video.snippet.thumbnails.high.url}
              alt={video.snippet.description}
            />
            <GridListTileBar title={video.snippet.title} titlePosition="top" />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default VideoList;
