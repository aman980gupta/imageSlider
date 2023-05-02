import React from 'react'

const SmallImageCard = (props:{
 
  url?: string;
  urlToImage?: string;
  content?: string;
  
}) => {
  console.log(props)
  return (
    <img className='smallImageCard' src={props.urlToImage} alt='image' />
  )
}

export default SmallImageCard

