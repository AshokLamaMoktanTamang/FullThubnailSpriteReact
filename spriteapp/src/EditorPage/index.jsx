import React from "react";
import {
  Player,
  LoadingSpinner,
  BigPlayButton,
  ControlBar,
  PlayToggle,
  CurrentTimeDisplay,
  TimeDivider,
  DurationDisplay,
  VolumeMenuButton,
  PlaybackRateMenuButton,
  ProgressControl,
  FullscreenToggle,
} from "video-react";
import "video-react/dist/video-react.css";

import ThumbnailProgressControl from "./ThumbnailProgressControl";

export default function Index({ streamingUrl }) {
  return (
    <div style={{maxWidth: '500px'}}>
      <Player preload="auto" muted>
        <source src={streamingUrl} type="video/mp4" />
        <LoadingSpinner />
        <BigPlayButton position="center" />
        <ControlBar>
          <PlayToggle order={1} />
          <CurrentTimeDisplay order={1.3} />
          <TimeDivider order={1.4} />
          <DurationDisplay order={1.5} />
          <VolumeMenuButton order={1.6} />
          <ThumbnailProgressControl
            streamingUrl={streamingUrl}
            order={1.7}
            videoSpriteImageURL={"output"}
          />
          <ProgressControl />
          <PlaybackRateMenuButton
            rates={[2, 1.5, 1.25, 1.1, 1, 0.9, 0.75, 0.5]}
            order={1.8}
          />
          <FullscreenToggle order={1.9} />
        </ControlBar>
      </Player>
    </div>
  );
}
