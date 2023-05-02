import React from 'react'

const ImageText =  (props:{content:string}) => {
  return (
    <div className='imageText'>
        <div className='text' >
            <h2>
                this is image text h2 type
            </h2>
        </div>
        <div className='discriptionText'>
            <p className='discription'>
                {props.content}
            </p>
        </div>
    </div>
  )
}

export default ImageText