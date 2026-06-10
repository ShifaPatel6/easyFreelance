import React from 'react'

 const InputCompo = ({ placeholder, value, onChange ,type, className ,label,style}) => {
  return (
    <>
    
    
    <div className='flex flex-col gap-1'>  
      {label && <label>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
        style={style}
      />
    </div>
    </>
  )
}
export default InputCompo;