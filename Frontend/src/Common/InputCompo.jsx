import React from 'react'

 const InputCompo = ({ placeholder, value, onChange ,type, className}) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
      />
    </div>
  )
}
export default InputCompo;