import React from 'react'
import { colors, RegularButton, Heading, OuterContainer, HeadingSubHeading, InputTag } from '../CommonCss/commoncss';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import InputCompo from '../Common/InputCompo';
import { Dropdown } from '../Common/Dropdown';

export const ProposalWriter = () => {
    const [label, setLabel] = useState('');
    const [clientName, setClientName] = useState('');
    const [brief, setBrief] = useState('');
    const [experience, setExperience] = useState('');
    const [budget, setBudget] = useState('');
    const [timeline, setTimeline] = useState('');
    const [skills, setSkills] = useState('');

    const optionsarr = [
        { label: 'Web Development', value: 'web_dev' },
        { label: 'Graphic Design', value: 'graphic_design' },
        { label: 'Content Writing', value: 'content_writing' },
        { label: 'UI/UX Design', value: 'ui_ux_design' },
    ]

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

                <div className='h-auto w-11/12 bg-slate-100 border-gray-200 border-2 rounded-2xl mx-auto p-6 font-semibold' style={{ color: colors.textSecondary }}>
                    <div className='flex flex-col items-center gap-6'>

                        {/* Row 1 — Client Name + Project Type */}
                        <div className='flex gap-4 w-full'>
                            <div className='flex flex-col gap-2 flex-1'>
                                <InputTag>Client Name</InputTag>
                                <InputCompo
                                    placeholder="Client Name"
                                    value={clientName}
                                    onChange={(e) => setClientName(e.target.value)}
                                    type="text"
                                    className='w-full p-2 rounded-xl'
                                />
                            </div>
                            <div className='flex flex-col gap-2 flex-1 relative'>
                                <InputTag>Project Type</InputTag>
                                <Dropdown
                                    options={optionsarr}
                                    placeholder="Select Project Type"
                                    onChange={setLabel}
                                />
                            </div>
                        </div>

                        {/* Row 2 — Client Requirement */}
                        <div className='flex flex-col gap-2 w-full'>
                            <InputTag>Client requirement / brief</InputTag>
                            <textarea
                                value={brief}
                                onChange={(e) => setBrief(e.target.value)}
                                className='w-full h-20 p-4 rounded-2xl bg-white resize-none focus:outline-none'
                            />
                        </div>

                        {/* Row 3 — Experience + Budget + Timeline */}
                        <div className='flex gap-4 w-full'>
                            <div className='flex flex-col gap-2 flex-1'>
                                <InputTag>Your experience (years)</InputTag>
                                <InputCompo
                                    placeholder="e.g. 3"
                                    value={experience}
                                    onChange={(e) => setExperience(e.target.value)}
                                    type="text"
                                    className='w-full p-2 rounded-xl'
                                />
                            </div>
                            <div className='flex flex-col gap-2 flex-1'>
                                <InputTag>Expected budget (Rs.)</InputTag>
                                <InputCompo
                                    placeholder="e.g. 15000"
                                    value={budget}
                                    onChange={(e) => setBudget(e.target.value)}
                                    type="text"
                                    className='w-full p-2 rounded-xl'
                                />
                            </div>
                            <div className='flex flex-col gap-2 flex-1'>
                                <InputTag>Timeline (weeks)</InputTag>
                                <InputCompo
                                    placeholder="e.g. 4"
                                    value={timeline}
                                    onChange={(e) => setTimeline(e.target.value)}
                                    type="text"
                                    className='w-full p-2 rounded-xl'
                                />
                            </div>
                        </div>

                        {/* Row 4 — Skills */}
                        <div className='flex flex-col gap-2 w-full'>
                            <InputTag>Your skills (comma separated)</InputTag>
                            <textarea
                                value={skills}
                                onChange={(e) => setSkills(e.target.value)}
                                className='w-full h-12 p-4 rounded-2xl bg-white resize-none focus:outline-none'
                            />
                        </div>

                    </div>

                    {/* Generate Button */}
                    <div className='flex justify-end w-full mt-4'>
                        <RegularButton className='h-10 text-xl px-6'>
                            Generate Proposal
                        </RegularButton>
                    </div>
                </div>

            </OuterContainer>
        </>
    )
}