import React from 'react'
import { useParams } from 'react-router-dom';


function PlayView() {
    const { vid } = useParams();
    const videoSrc = `https://www.youtube.com/embed/${vid}`

    console.log(vid)
  return (
    <div>

<iframe src={videoSrc} height="400" width="800" title='play' />

    </div>
  )
}

export default PlayView