import React, { MouseEventHandler,useState } from 'react';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';

interface PlayProps {
  isplaying:boolean
}
const PlayPause = ()=>{
  const [isplaying,setIsPlaying] = useState<boolean>(false)

  const handlePLayBtn = ()=>{
    setIsPlaying(prev=>!prev)
    console.log(isplaying)
  }
  return <div onClick={()=>handlePLayBtn()}>
    {isplaying ?
    <span><PauseCircleOutlineIcon/></span> :
     <span><PlayCircleOutlineIcon/></span> }
  </div>
}

export default PlayPause