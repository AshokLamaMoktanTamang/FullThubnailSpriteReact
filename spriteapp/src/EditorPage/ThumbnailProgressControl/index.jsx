import PropTypes from "prop-types";
import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import { SeekBar } from "video-react";
import SpriteThumbnail from "../spriteThumbnail";

import * as Dom from "video-react/lib/utils/dom";

// import style from './style'

class ProgressControl extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      mouseTime: {
        time: null,
        position: 0,
      },
    };

    this.handleMouseMoveThrottle = this.handleMouseMove.bind(this);
  }

  handleMouseMove(event) {
    if (!event.pageX) {
      return;
    }
    const {
      player: { duration },
    } = this.props;
    const node = findDOMNode(this.seekBar); // eslint-disable-line react/no-find-dom-node
    const newTime = Dom.getPointerPosition(node, event).x * duration;
    const position = event.pageX - Dom.findElPosition(node).left;

    this.setState({
      mouseTime: {
        time: newTime,
        position,
      },
    });
  }

  render() {
    const { videoSpriteImageURL } = this.props;

    return (
      <div
        onMouseMove={this.handleMouseMoveThrottle}
        className="video-react-progress-control video-react-control"
      >
        <SeekBar
          mouseTime={this.state.mouseTime}
          ref={(c) => {
            this.seekBar = c;
          }}
          {...this.props}
        />
        <SpriteThumbnail
          videoSpriteImageURL={videoSpriteImageURL}
          mouseTime={this.state.mouseTime}
        />
      </div>
    );
  }
}

ProgressControl.propTypes = {
  classes: PropTypes.object,
  player: PropTypes.object,
  className: PropTypes.string,
  streamingUrl: PropTypes.string,
  provider: PropTypes.string,
};

ProgressControl.displayName = "ProgressControl";

export default ProgressControl;
