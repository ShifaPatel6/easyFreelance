// components/ResultSection.jsx
import { useEffect, useRef } from 'react'
import {Loader} from "../components/Loader"
  import { CircleArrowLeft } from 'lucide-react';


const ResultCompo = ({ result, isLoading ,onBack}) => {



  return (
    <>
    
    

    <div className='text-black'>

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