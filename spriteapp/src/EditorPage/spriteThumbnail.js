import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { formatTime } from 'video-react/lib/utils/'

const SpriteThumbnail = forwardRef(({ videoSpriteImageURL, mouseTime }, ref) => {
  const spriteRef = useRef(null)
  const containerRef = useRef(null)

  // initialin=zing the data
  const [perSpriteWidth, setperSpriteWidth] = useState(null)
  const time = formatTime(mouseTime.time)

  const splitTime = time.split(':')
  const totalSeconds = splitTime[0] * 60 + parseInt(splitTime[1])
  const videoSpriteImageURLIndex = Math.floor(totalSeconds / 40) + 1

  // initializing the display index of the sprite image
  const newTime = mouseTime.time || 0
  const videoSpriteImageXIndex = newTime === 0 ? 0 : parseInt((newTime / 10).toString().split('.')[1][0])
  const videoSpriteImageYIndex = newTime >= 40 ? (Math.floor(newTime / 10) % 4): Math.floor(newTime / 10)

  // calculating previewSprite width
  useEffect(() => {
    return () => {
      setperSpriteWidth(spriteRef.current ? spriteRef.current.naturalWidth / 10 : 0)
    }
  })

  const optimalThumbnailWidth = 500
  const progressBarWidth = containerRef.current ? containerRef.current.parentElement.offsetWidth : 0

  const scale = (progressBarWidth / optimalThumbnailWidth) * 100
  const newScale = scale > 200 ? 200 : scale < 80 ? 80 : scale

  return (
    <div
      ref={containerRef}
      className="thumbnail video-react-mouse-display"
      style={{
        top: `${-perSpriteWidth / 1.77 - (newScale - 110) / 2}px`,
        zIndex: 2,
        height: perSpriteWidth / 1.77 || 72,
        width: perSpriteWidth || 128,
        left: `${mouseTime.position + (newScale - 270) / 2}px`,
        scale: `${newScale}%`,
        transform: 'translate(0)',
        overflow: 'hidden',
      }}
      data-current-time={time}
    >
      <img
        ref={spriteRef}
        src={`http://localhost:5000/sprite/${videoSpriteImageURL}${videoSpriteImageURLIndex}.png`}
        alt="sprite"
        style={{
          position: 'absolute',
          top: `${(videoSpriteImageYIndex * -perSpriteWidth) / 1.77}px`,
          left: `${videoSpriteImageXIndex * -perSpriteWidth}px`,
          transform: `translate(${scale})`,
        }}
      />
    </div>
  )
})

export default SpriteThumbnail
