import React from 'react'
import { InputTag } from '../CommonCss/commoncss';

 const InputCompo = ({ placeholder, value, onChange ,type, className ,label,style,readOnly}) => {
  return (
    <>
    
    
    <div className='flex flex-col gap-1'>  
      {label && <InputTag>{label}</InputTag>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
        style={style}
         readOnly={readOnly} 
      />
    </div>
    </>
  )
}
export default InputCompo;