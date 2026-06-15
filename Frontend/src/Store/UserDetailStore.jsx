import {create} from 'zustand'

const useInvoicedetailStore =create((set)=>({

    userDetail :{
        name:'',
        email:'',
        bankDetail:'',
        exp:'',
        jobTitle:'',
        skills:[]
    },

    clientDetail :{
        name:'',
        company:'',
        invoiceDate:'',
        dueDate:'',
        invoiceNumber:'',
        invoiceAmount:''

    },
    //setter

    setUserDetail:(feild ,value)=>set((state)=>({
        userDetail:{...state.userDetail,[feild]:value}
    })),
    setClientDetail:(feild,value)=>set((state)=>({
    clientDetail:{...state.clientDetail,[feild]:value}
}))


    


})


)
export default useInvoicedetailStore