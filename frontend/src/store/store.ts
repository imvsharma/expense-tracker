import { Models } from 'appwrite';
import { StateCreator, create } from 'zustand';
import {persist} from 'zustand/middleware'

interface IExpense {
    expenseType: string,
    expenseName: string,
    amount: number,
    category: string,
    expenseDate: Date | null,
}

interface IExpenseSlice {
    expenses: Models.Document[],
    getExpenses: (expenses: Models.Document[]) => void
}

const createExpenseSlice: StateCreator<IExpenseSlice, [], [["zustand/persist", IExpenseSlice]], IExpenseSlice> = persist((set) => ({
    expenses: [],
    getExpenses: (expenses: Models.Document[]) => set(() => ({expenses: expenses}))
}), {name: 'expense-storage'}) 

const useBoundStore = create<IExpenseSlice>()((...a) => ({
    ...createExpenseSlice(...a)
}))

export default useBoundStore