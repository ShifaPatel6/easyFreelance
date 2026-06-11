import {create} from 'zustand'

const useInvoicedetailStore =create((set)=>({

    userDetail :{
        name:'',
        email:'',
        bankDetail:''
    },

    clientDetail :{
        name:'',
        company:'',
        invoiceDate:'',
        dueDate:''

    },
    //setter

    setUserDetail:(feild ,value)=>set((state)=>({
        userDetail:{...state.userDetail,[feild]:value}
    })),
    setClienDetail:(feild,value)=>set((state)=>({
    clientDetail:{...state.clientDetail,[feild]:value}
}))


    


})


)
export default useInvoicedetailStore