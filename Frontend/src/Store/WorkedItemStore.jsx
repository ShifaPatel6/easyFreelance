import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useWorkedItemStore = create(persist((set,get) => ({
  items: [
    { id: 1, description: '', quantity: '', rate: '' ,amount:''},
    { id: 2, description: '', quantity: '', rate: '' ,amount:''},
    { id: 3, description: '', quantity: '', rate: '',amount :'' },
  ],

  updateItem: (id, field, value) => set((state) => ({
    items: state.items.map(item =>
      item.id === id ? { ...item, [field]: value } : item
    )
  })),

  addItem: () => set((state) => ({
    items: [...state.items, {
      id: state.items.length + 1,
      description: '',
      quantity: '',
      rate: '',
      amount:''
    }]
  })),
 
  getSubTotal: () => {
    const items = get().items
    return items.reduce((total, item) =>
      total + (Number(item.amount)), 0
    )
  },

  getGst: () => get().getSubTotal() * 0.18,
  getTotal: () => get().getSubTotal() + get().getGst()
}),
{
  name:'Worked-Item'
}

))

export default useWorkedItemStore