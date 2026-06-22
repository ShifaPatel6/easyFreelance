import React from 'react'
import '../css/Loader.css'
import {colors} from "../CommonCss/commoncss"

export const Loader = ({variant ='dot'}) => {
 
    if (variant === "dot"){
        return (
            <>  <div className='dots p-3 rounded-full' style={{background:colors.background ,color:'white'}}>
              <span/> <span/><span/>

      </div>
            </>
        )
    } 
  if (variant === "skeleton") {
    return (
        <div className='flex justify-center '>

      <div className="skeleton-card ">
        <div className="skeleton sk-avatar" />
        <div className="skeleton sk-line" style={{ width: "60%" }} />
        <div className="skeleton sk-line" style={{ width: "90%" }} />
        <div className="skeleton sk-line" style={{ width: "75%" }} />
      </div>
        </div>
    );
  }
  
}
