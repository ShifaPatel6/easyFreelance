import React from 'react'
import { colors, RegularButton, Heading, OuterContainer, HeadingSubHeading, InputTag } from '../CommonCss/commoncss';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import InputCompo from '../Common/InputCompo';
import { Dropdown } from '../Common/Dropdown';
import { ChevronDown } from 'lucide-react';
import useProposalWriterStore from '../Store/ProposalWriterStore'


export const ProposalWriter = () => {
    const [label, setLabel] = useState('');
    const [error, setError] = useState({});

    const ProposalInfo = useProposalWriterStore((state)=>state.ProposalInfo)
    const setProposalInfo =useProposalWriterStore((state)=>state.setProposalInfo)

    const optionsarr = [
        { label: 'Other', value: 'other' },
        { label: 'Web Development', value: 'web_dev' },
        { label: 'Graphic Design', value: 'graphic_design' },
        { label: 'Content Writing', value: 'content_writing' },
        { label: 'UI/UX Design', value: 'ui_ux_design' },

    ]
    const DisableHelper =!ProposalInfo.clientName || !ProposalInfo.brief || !ProposalInfo.experience || !ProposalInfo.budget || !ProposalInfo.timeline ||!ProposalInfo.skills
    return (
        <>
            <OuterContainer>
                <HeadingSubHeading>
                    <div className='flex justify-between items-center'>
                        <Heading>Proposal Writer</Heading>
                    </div>
                    <div>
                        <h1>Add project details → AI writes a winning proposal for you along with pricing</h1>
                    </div>
                </HeadingSubHeading>

                <div className='h-auto w-11/12  border-gray-200 border-2 rounded-2xl mx-auto p-6 font-semibold' style={{ color: colors.textSecondary }}>
                    <div className='flex flex-col items-center gap-6'>

                        {/* Row 1 — Client Name + Project Type */}
                        <div className='flex gap-4 w-full'>
                            <div className='flex flex-col gap-2 flex-1'>
                                <InputTag>Client Name</InputTag>
                                <InputCompo
                                    placeholder="Client Name"
                                    value={ProposalInfo.clientName}
                                    onChange={(e) => setProposalInfo('clientName',e.target.value)}
                                        
                                    type="text"
                                    className='w-full p-2 rounded-xl border-gray-300 border-2'
                                />
                            </div>
                            <div className='flex flex-col gap-2 flex-1 relative'>
                                <InputTag>Project Type</InputTag>
                                <Dropdown
                                    options={optionsarr}
                                    placeholder="Select Project Type"
                                    onChange={setLabel}
                                />
                                <ChevronDown className='absolute right-4 top-12' />
                            </div>
                        </div>

                        {/* Row 2 — Client Requirement */}
                        <div className='flex flex-col gap-2 w-full'>
                            <InputTag>Client requirement / brief</InputTag>
                            <textarea
                                value={ProposalInfo.brief}
                                    onChange={(e) => setProposalInfo('clientName',e.target.value)}
                                className='w-full h-20 p-4 rounded-2xl bg-white resize-none focus:outline-none border-gray-300 border-2'
                            />
                        </div>

                        {/* Row 3 — Experience + Budget + Timeline */}
                        <div className='flex gap-4 w-full'>
                            <div className='flex flex-col gap-2 flex-1'>
                                <InputTag>Your experience (years)</InputTag>
                                <InputCompo
                                    placeholder="e.g. 3"
                                    value={ProposalInfo.experience}
                                    onChange={(e) => {setProposalInfo('experience',e.target.value);
                                    if(isNaN(e.target.value)){
                                            setError({...error, experience:"Please enter valid experience in numbers"})
                                    }else{
                                        setError({...error, experience:""})
                                    }}
                                }
                                    type="text"
                                    className='w-full p-2 rounded-xl border-gray-300 border-2'
                                />
                                {error.experience && <span className='text-red-500 text-sm'>{error.experience}</span>}
                            </div>
                            <div className='flex flex-col gap-2 flex-1'>
                                <InputTag>Expected budget (Rs.)</InputTag>
                                <InputCompo
                                    placeholder="e.g. 15000"
                                    value={ProposalInfo.budget}
                                    onChange={(e) => {
                                        setProposalInfo('budget',e.target.value);
                                        if(isNaN(e.target.value)){
                                            setError({...error,budget:"Please enter valid budget in numbers"});
                                        }else{
                                            setError({...error ,budget:""});
                                        }
                                    }}
                                    
                                    type="text"
                                    className='w-full p-2 rounded-xl border-gray-300 border-2'
                                />
                                {error.budget && <span className='text-red-500 text-sm'>{error.budget}</span>}
                            </div>
                            <div className='flex flex-col gap-2 flex-1 '>
                                <InputTag>Timeline (weeks)</InputTag>
                                 <InputCompo
                                    placeholder="e.g. 15000"
                                    value={ProposalInfo.timeline}
                                    onChange={(e) => {
                                        setProposalInfo('timeline',e.target.value);
                                        if(isNaN(e.target.value)){
                                            setError({...error,timeline:"Please enter valid timeline in numbers"});
                                        }else{
                                            setError({...error ,timeline:""});
                                        }
                                    }}
                                    
                                    type="text"
                                    className='w-full p-2 rounded-xl border-gray-300 border-2 focus:outline-none'
                                />
            
                                {error.timeline && <span className='text-red-500 text-sm'>{error.timeline}</span>}
                            </div>
                        </div>

                        {/* Row 4 — Skills */}
                        <div className='flex flex-col gap-2 w-full'>
                            <InputTag>Your skills (comma separated)</InputTag>
                            <textarea
                                value={ProposalInfo.skills}
                                    onChange={(e) => setProposalInfo('skills',e.target.value)}
                                className='w-full h-12 p-4 rounded-2xl bg-white resize-none focus:outline-none border-gray-300 border-2'
                            />
                        </div>

                    </div>

                    {/* Generate Button */}
                    <div className='flex justify-end w-full mt-4'>
                        <RegularButton className='h-10 text-xl px-6' disabled={DisableHelper}>
                            Generate Proposal
                        </RegularButton>
                    </div>
                </div>

            </OuterContainer>
        </>
    )
}