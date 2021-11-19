import React from 'react'

const Button = ({color, holder, onAdd}) => {
    return(
       <button onClick={onAdd} style ={{backgroundColor:color}} className='btn'>{holder}</button>
       
)
}

export default Button;