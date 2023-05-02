import React,{ReactNode} from 'react'

interface CardProps <T> {
  items:T[],
  render: (item:T) =>ReactNode
}

const Card = <T,>({items,render}:CardProps<T>) => {
  return (
    <div className='card'>
      {items.map((item,i)=>(
          <div>
            {render(item)}
          </div>
        )
      )}
    </div>
  )
}

export default Card