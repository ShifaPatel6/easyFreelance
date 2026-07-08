import {create} from 'zustand'
import { persist } from 'zustand/middleware'


const useInvoicedetailStore = create(persist((set,get)=>({

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
        invoiceAmount:'',
     

    },
    //setter
    setUserDetail:(feild ,value)=>set((state)=>({
        userDetail:{...state.userDetail,[feild]:value}
    })),
    setClientDetail:(feild,value)=>set((state)=>({
    clientDetail:{...state.clientDetail,[feild]:value}
}))

}),
{
      name: 'gigmate-invoice',
    }

)


)
export default useInvoicedetailStore