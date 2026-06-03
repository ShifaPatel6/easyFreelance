import React from 'react'

export const Dropdown = ({options=[], onChange ,placeholder}) => {
    const [inputValue, setInputValue] = React.useState('');
    const [isOpen, setIsOpen] = React.useState(false);

    const handleSelectInput =(options)=>{
        setInputValue(options.label);
        setIsOpen(false);
        onChange(options.value);
    }

  return (
    <>
        
        <div className='relative'>
            <input
                type="text"
                placeholder={placeholder}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onClick={() => setIsOpen(!isOpen)}
                className='w-full p-2 rounded-xl cursor-pointer'
            />
            {isOpen && (
    <div className='absolute top-full  w-full bg-white border rounded-md mt-1 z-50 max-h-60 overflow-y-auto'>                    {options.map((option) => (
                        <div
                            key={option.value}
                            onClick={() => handleSelectInput(option)}
                            className='p-2 hover:bg-gray-200 cursor-pointer'
                        >
                            {option.label}
                           
                        </div>
                    ))}
                </div>
            )}
        </div>
     
        </>
  )
}
