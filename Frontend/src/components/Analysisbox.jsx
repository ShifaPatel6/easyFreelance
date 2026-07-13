import React from 'react'

 const Analysisbox = ({ data, indexNumber}) => {
    if (!data) return null

const entries = Object.entries(data); // Array format: [ [key, value], [key, value] ]
  const [key, value] = entries[indexNumber];

const bulletMap = {
  questions: (item, i) => `Q${i + 1}. ${item}`,
  timeline: (item) => `📅 ${item}`,
  pricing: (item) => `💰 ${item}`,
  skills: (item) => `✅ ${item}`,
  deliverables: (item) => `• ${item}`,
  approach: (item) => `• ${item}`,
};
   return (
    <div className="analysis-card" style={{ margin: '15px 0', padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
      {/* Key name ko clean karke heading banayega (e.g., missing_info -> Missing Info) */}
      <h3 style={{ textTransform: 'capitalize', color: '#333' }}>
        {key.replace(/_/g, ' ')}
      </h3>

      {/* Agar value ek Array hai (jaise missing_info, deliverables), toh list dikhao */}
      {Array.isArray(value) ? (
        <ul>
          {value.map((item, index) => (
<li key={index} style={{ marginBottom: '5px' }}>
         {bulletMap[key] ? bulletMap[key](item, index) : `• ${item}`}

      </li>          ))}
        </ul>
      ) : (
        /* Agar value simple text hai (jaise what_they_want), toh paragraph dikhao */
        <p>{value}</p>
      )}
    </div>
  );
}
export default Analysisbox