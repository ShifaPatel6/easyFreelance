import React from 'react'

 const InputCompo = ({ placeholder, value, onChange ,type, className ,label}) => {
  console.log({value},{placeholder})
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
      />
    </div>
    </>
  )
}
export default InputCompo;