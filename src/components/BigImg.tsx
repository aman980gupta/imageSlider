import React from 'react'

const BigImg = (props:{urlToImage: string;}) => {
  return (
    <div>
        <img className='bigImage' src={props.urlToImage} alt='no img'/>
    </div>
  )
}

export default BigImg