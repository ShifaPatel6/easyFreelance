import {create} from 'zustand';

const usePlanStore = create((set)=>({
    plan : null,
    name : null,
    setPlan : (plan, name)=>set({plan, name}),
    ClearUser : ()=>set({plan:null ,name:null})

}))
export default usePlanStore;