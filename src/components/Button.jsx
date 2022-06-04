import React from 'react';
import './Button.css'
const Button=(props)=>{
    return(
        <button onClick={props.add} className="button">
            {
                props.children
            }

        </button>
    )

}
export default Button;