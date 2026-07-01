// components/ResultSection.jsx
import { useEffect, useRef } from 'react'
import {Loader} from "../components/Loader"
  import { CircleArrowLeft } from 'lucide-react';


const ResultCompo = ({ result, isLoading ,onBack}) => {
const lightColors = [
  "bg-blue-100",
  "bg-purple-100",
  "bg-green-100",
  "bg-yellow-100",
  "bg-pink-100",
  "bg-orange-100",
  "bg-teal-100",
  "bg-red-100",
];


  return (
    <>
    
    

    <div className='text-black overflow-auto' style={{maxHeight:'400px'}}>

      {isLoading ? (
        <Loader variant="dots" />  // tumhara loader component
      ) : (
     
    <div>
      {Object.entries(result).map(([key, value], index) => {
        const randomColor = lightColors[index % lightColors.length];

        return (
          <div key={key}>
            <h3 className={`${randomColor} p-1 rounded-md inline-block`}>
              {key.replace(/_/g, " ").toUpperCase()}
            </h3>

            {Array.isArray(value) ? (
              <ul>
                {value.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            ) : (
              <p>{value}</p>
            )}
          </div>
        );
      })}
    </div>
  
      )}
    </div>
    </>
  )
}

export default ResultCompo