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
     
  <div style={{ 
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "12px"
}}>
  {Object.entries(result).map(([key, value], index) => {
    const randomColor = lightColors[index % lightColors.length];

    return (
      <div key={key} style={{ marginBottom: "24px" }}>
        {/* Key Title Heading */}
        <h3 className={`${randomColor} p-1 rounded-md inline-block`} style={{ marginBottom: "12px" }}>
          {key.replace(/_/g, " ").toUpperCase()}
        </h3>

        {/* Text Container with whiteSpace: "pre-line" */}
        <div style={{ 
          whiteSpace: "pre-line", // 🔥 Yeh \n\n ko real blank spaces/line breaks me badlega
          lineHeight: "1.8",
          color: "#333",
          fontSize: "15px"
        }}>
          {value}
        </div>
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