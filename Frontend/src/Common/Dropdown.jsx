import React from 'react'
import{ useState ,useRef} from 'react';
import { StyledInput } from '../CommonCss/commoncss';

export const Dropdown = ({options=[], onChange ,placeholder}) => {
    const [inputValue, setInputValue] = React.useState('');
    const [isOpen, setIsOpen] = React.useState(false);
    const[isOther , setisOther] = React.useState(false);
    const inputRef = useRef(null);

    const handleSelectInput =(options)=>{
        if(options.label === "Other"){
            setInputValue("");
            setisOther(true);
            setIsOpen(false);
            onChange("");
            setTimeout(() => inputRef.current?.focus(), 0);  //input focus after selecting other option

            return;
        }
        setisOther(false);
        setInputValue(options.label);
        setIsOpen(false);
        onChange(options.value);
    }

  return (
    <>
        
        <div className='relative'>
            <StyledInput
                type="text"
                ref={inputRef}
                placeholder={isOther ? "Please specify" : placeholder}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onClick={() => setIsOpen(!isOpen)}
                className=' cursor-pointer '
            />

            {isOpen && (
    <div className='absolute top-full   bg-white border rounded-md mt-1 z-50 max-h-60 overflow-y-auto'>                    {options.map((option) => (
                         <>
                        <div
                            key={option.value}
                            onClick={() => handleSelectInput(option)}
                            className='p-2 hover:bg-gray-200 cursor-pointer text-black'
                        >

                            {option.label }

                            
                         
                           
                        </div>
                        </>
                    ))}
                    
                    
                </div>
                
               
            )}
        </div>
     
        </>
  )
}
