import { colors,RegularButton ,Heading, OuterContainer,HeadingSubHeading,InputTag} from '../CommonCss/commoncss';
import InputCompo from '../Common/InputCompo';
import { useState } from 'react';
import useInvoicedetailStore from '../Store/UserDetailStore';

 const BioWriter = () => {
     const [label, setLabel] = useState('');
        const [tone ,setTone] =useState('');
        const[jobTitle ,setJobTitle] =useState('');
        const userDetail =useInvoicedetailStore((state)=>state.userDetail)
        const setUserDetail =useInvoicedetailStore((state)=>state.setUserDetail)
        
        const DisableHelper =!tone ||!userDetail.name || !jobTitle || !userDetail.exp || !userDetail.skills;


   return (
    <>
    <OuterContainer >
    <HeadingSubHeading>
    <div className='flex justify-between items-center'>
  <Heading>
   Bio writer
  </Heading>

</div>
    <div>
     <h1> Enter your skills — AI will write a killer Upwork or LinkedIn bio that attracts clients.</h1> 
    </div>
  </HeadingSubHeading>

  <div className='h-auto w-  border-gray-200 border-2 flex flex-col  rounded-2xl mx-auto p-6  font-semibold'style={{color: colors.textSecondary}}>
<div className='flex flex-row items-center gap-5 mb-4'>

        <h1 className='uppercase'> Your details</h1> 
    <RegularButton className='h-8 w-24'
  >
    Result
    </RegularButton>
  
   </div>
   <div className='flex flex-col items-center gap-6'>

        <div className='flex gap-4 w-full justify-between '>

        <InputCompo label="Your name" placeholder="Your name" type="text" value={userDetail.name} className="w-full h-10 rounded-xl p-3 shadow-sm border-2 border-gray-300" onChange={(e)=>setUserDetail('name',e.target.value)}/>
        <InputCompo label="Job title" placeholder="Job title " type="text" value={jobTitle} className="w-full h-10 rounded-xl p-3 shadow-sm border-2 border-gray-300" onChange={(e)=>setJobTitle(e.target.value)}/>
       
  </div>
  <div className=' w-full  '>
    <InputCompo label="Skills (comma separated)" placeholder="Your skills" type="text" value={userDetail.skills} className=" h-18 rounded-xl p-3 shadow-sm border-2 border-gray-300 w-full" onChange={(e)=>setUserDetail('skills',e.target.value)} />

    </div>
 <div className='flex flex-col gap-2 w-full'>
                            <InputTag>Exp & Acheivements</InputTag>
                            <textarea
                                value={userDetail.exp}
                                    onChange={(e) => setUserDetail('exp',e.target.value)}
                                className='w-full h-20 p-4 rounded-2xl bg-white resize-none focus:outline-none border-gray-300 border-2'
                            />
                        </div>


    <div className='flex flex-col  w-full'>

<InputTag>Tone</InputTag>
<div className='flex gap-4'>
     <RegularButton 
  className='w-auto h-10 text-sm  '
  onClick={()=>setTone("professional")}
        $selected={tone === "professional"}

>
  
  Professional
</RegularButton>
 <RegularButton 
  className='w-auto h-10 text-sm '
    onClick={()=>setTone("confident")}
        $selected={tone === "confident"}


  
>
 Confident
</RegularButton>
 <RegularButton 
  onClick={()=>setTone("minimal")}
    $selected={tone === "minimal"}
  className='w-auto h-10 text-sm '

>
 Minimal
</RegularButton>
 <RegularButton 
  className='w-auto h-10 text-sm '
    onClick={()=>setTone("friendly")}
        $selected={tone === "friendly"}



>
 Friendly
</RegularButton>
    </div>
  </div>
    
 </div>
    <RegularButton 
  className='w-full h-10 text-xl mt-6'
  disabled={DisableHelper}
>
 Generate Bio
</RegularButton>
  </div>

</OuterContainer>
    </>
  )
}
export default BioWriter