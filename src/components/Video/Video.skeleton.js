import React from "react";

const VideoSkeleton = ({ error }) => (
  <div className="skeleton__video">
    {error ? "" : <div className="skeleton__video--loading"></div>}
  </div>
);

export default VideoSkeleton;
