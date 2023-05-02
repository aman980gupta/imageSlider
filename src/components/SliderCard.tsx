import React from 'react'

const SliderCard = (props:{urlToImage:string}) => {
  return (
    <div className='sliderCard'>
        <img className='sliderCardImage' src={props.urlToImage} alt="no image" />
    </div>
  )
}

export default SliderCard