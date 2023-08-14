import { create } from 'zustand'

export const useShopCarStore = create((set) => ({
  items: [],
  moneyToPay: 0,
  addMoneyToPay: (money) => set((state) => {
    const newMoney = Number(money) + Number(state.moneyToPay)
    if (newMoney.toString().includes('.')) return { moneyToPay: newMoney.toFixed(2) }
    return { moneyToPay: newMoney }
  }),
  addItem: (item) => set(() => ({ items: item })),
  removeItem: (id) => set((state) => ({ items: state.items.filter(item => item.id !== id) })),
  clearItems: () => set(() => ({ items: [] }))
}))
