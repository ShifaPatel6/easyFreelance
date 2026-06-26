import React from 'react'
import { InputTag ,StyledInput} from '../CommonCss/commoncss';

 const InputCompo = ({ placeholder, value, onChange ,type, className ,label,style,readOnly}) => {
  return (
    <>
    
    
    <div className='flex flex-col gap-1 '>  
      {label && <InputTag>{label}</InputTag>}
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={style}
        readOnly={readOnly} 
        className={className}

      />
    </div>
    </>
  )
}
export default InputCompo;