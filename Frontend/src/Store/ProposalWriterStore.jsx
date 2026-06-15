import {create} from 'zustand'

const useProposalWriterStore = create((set)=>({

    ProposalInfo :{
        clientName:'',
        brief:'',
        experience:'',
        budget:'',
        timeline :'',
        skills :[],
        projectType:''
    },

    setProposalInfo :(feild ,value)=>set((state)=>({
        ProposalInfo:{...state.ProposalInfo , [feild]:value}

    })
    
    ),
}))

export default useProposalWriterStore;