import React from 'react'
import "./Card.css"

const Card = (data) => {
  return (
    <div className='cards'>
        <div className='title'>
            <h1>{data.title}</h1>
            <img src={data.image} alt="" />
        </div>
        
        <div className='card-over'>
            <p>
                {data.desc}
            </p>
        </div>
    </div>
  )
}

export default Card