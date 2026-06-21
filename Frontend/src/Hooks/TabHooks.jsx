import {useRef , useState} from 'react'


 const TabHooks = () => {
    const[activeTab ,setActiveTab] = useState('form')
  
    const goToResult =()=>{
        setActiveTab('result');
      setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
    }
    const goToForm =()=>{
        setActiveTab('form')
        setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
    }
    return {goToForm , goToResult  ,activeTab}
}
export default TabHooks