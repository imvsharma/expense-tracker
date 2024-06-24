import { Models } from 'appwrite';
import { StateCreator, create } from 'zustand';
import {persist} from 'zustand/middleware'

interface IUser {
    userId: string
}

interface IExpenseSlice {
    expenses: Models.Document[]
    getExpenses: (expenses: Models.Document[]) => void
}

interface IUserSlice {
    user: IUser
    getUser: (id: string) => void
}

const createExpenseSlice: StateCreator<IExpenseSlice & IUserSlice, [], [], IExpenseSlice> = (set) => ({
    expenses: [],
    getExpenses: (expenses: Models.Document[]) => set(() => ({expenses}))
})

const createUserSlice: StateCreator<IExpenseSlice & IUserSlice, [], [], IUserSlice> = (set) => ({
    user: {userId: ''},
    getUser: (id: string) => set((state) =>{
        console.log(state)
        console.log(id)
        return ({user: {...state.user, userId: id}})
    } )
})



const useBoundStore = create<IExpenseSlice & IUserSlice>()(persist((...a) => ({
    ...createExpenseSlice(...a),
    ...createUserSlice(...a)
}),{name: 'expense-storage'}))

export default useBoundStore