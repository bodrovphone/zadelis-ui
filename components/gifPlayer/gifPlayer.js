import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Image from "next/image";

const GifPlayer = ({ gif, still, playing, toggle, ...rest }) => (
  <div
    className={classNames("gif_player", { playing: playing })}
    onMouseEnter={toggle}
    onMouseLeave={toggle}
  >
    <div className="play_button" />
    <Image
      width={75}
      height={75}
      {...rest}
      src={playing ? gif || still : still || gif}
    />
  </div>
);

GifPlayer.propTypes = {
  gif: PropTypes.string,
  still: PropTypes.string,
  playing: PropTypes.bool,
  toggle: PropTypes.func,
};

export default GifPlayer;
