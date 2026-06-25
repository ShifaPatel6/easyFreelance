import {create} from 'zustand'

const useToggleNav = create((set)=>({

    isToggleNav : false ,
    toggleNav:()=>set(state =>({isToggleNav:!state.isToggleNav})),


}))

export default useToggleNav;