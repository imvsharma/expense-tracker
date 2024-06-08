import expressService from "@/services/expense";
import { Models } from "appwrite";
import { createContext, ReactNode, useContext, useEffect, useState} from "react";


interface IExpense extends Models.Document {
    expenseType: string,
    expenseName: string,
    amount: number,
    category: string,
    expenseDate: Date | null,
}

interface IExpenseInput {
    expenseType: string,
    expenseName: string,
    amount: number,
    category: string,
    expenseDate: Date | null,
}

export interface IExpenseContext {
    current: IExpense [] | Models.Document [] | null,
    addExpense: (expense:IExpenseInput) => Promise<void>,
    removeExpense: (id: string) => Promise<void>,
}


interface IExpenseProviderProps {
    children: ReactNode
}

const ExpenseContext = createContext<IExpenseContext | undefined>(undefined)

export const ExpenseProvider = ({children, ...props}: IExpenseProviderProps) => {
    const [expense, setExpense] = useState<IExpense[] | Models.Document[]>([]);

    const addExpense = async (expense:IExpenseInput) => {
        const response = await expressService.addExpense(expense);
        setExpense((expense) => [response, ...expense])
    }

    const removeExpense = async (id: string) => {
        await expressService.removeExpense(id);
        setExpense((expenses) => expenses.filter((expense) => expense.id !== id))
        await getExpenses()
    }

    

    const getExpenses = async () => {
       const response = await expressService.getExpenses();
       setExpense(response.documents)
    }

    useEffect(() => {
        getExpenses();
    }, [])

    const value: IExpenseContext = {
        current: expense,
        addExpense,
        removeExpense
    }

     
    return(
        <ExpenseContext.Provider value={value} {...props}>
            {children}
        </ExpenseContext.Provider>
    )
}

export const useExpenses = () => {
    const context = useContext(ExpenseContext)

    if (context === undefined) 
        throw new Error("useExpenses must be used within a expenseProvider")
    
    return context
}