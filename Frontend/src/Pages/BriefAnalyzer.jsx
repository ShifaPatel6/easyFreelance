import React from 'react'
import { colors } from '../CommonCss/commoncss';

 const BriefAnalyzer = () => {
  return (
    <>
    <div className='flex flex-col p-10 gap-6'>
    <div className='flex flex-col gap-3 ml-9'>
    <div className='font-semibold text-3xl ' style={{color: colors.textSecondary}}>
      Brief Analyzer
    </div>
    <div>
      Paste client message → AI clearly explains what they actually want
    </div>
  </div>

  <div className='h-96 w-11/12 bg-slate-100 rounded-2xl mx-auto p-6 font-semibold'style={{color: colors.textSecondary}}>
   Paste Client Message or Brief
  </div>
</div>
    </>
  )
}
export default BriefAnalyzer;