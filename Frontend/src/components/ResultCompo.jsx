// components/ResultSection.jsx
import { useEffect, useRef } from 'react'
import {Loader} from "../components/Loader"
  import { CircleArrowLeft } from 'lucide-react';


const ResultCompo = ({ result, isLoading ,onBack}) => {

  const resultRef = useRef(null)


  useEffect(() => {
    if (result) {
      
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        })
      }, 100)
    }
  }, [result])  // result change hone par scroll

  if (!result && !isLoading) return null  // kuch nahi dikhao

  return (
    <>
    
    

    <div ref={resultRef} >

      {isLoading ? (
        <Loader variant="dots" />  // tumhara loader component
      ) : (
        <p>{result}</p>  // ya jo bhi structure chahiye
      )}
    </div>
    </>
  )
}

export default ResultCompo