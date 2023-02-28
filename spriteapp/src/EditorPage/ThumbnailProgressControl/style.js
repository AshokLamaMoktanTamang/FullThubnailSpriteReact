const style = () => ({
  root: {
    '& .thumbnail.video-react-mouse-display': {
      fontSize: 16,
      transform: 'translateX(-45%)',
      '&:after': {
        top: 'calc(100% - 17px)',
        right: 0,
        width: '100%',
        borderRadius: 0,
        padding: 4,
        background: 'rgba(0,0,0,0.4)',
      },
      '& .video-react-big-play-button': {
        display: 'none',
      },
      '& .video-react-loading-spinner': {
        height: 16,
        width: 16,
        top: 52,
        left: 80,
      },
      '& .video-react-play-progress': {
        top: '-20px',
      },
    },
  },
})

export default style
